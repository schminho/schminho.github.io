function adjustCanvasSize() {
    const isMobile = window.innerWidth <= 768; // Detect mobile screens
    bellCurveCanvas.width = isMobile ? 300 : 600; // Smaller canvas on mobile
    bellCurveCanvas.height = isMobile ? 150 : 300; // Smaller height on mobile
}

function drawBellCurve(zScore) {
    adjustCanvasSize(); // Adjust canvas dimensions

    const width = bellCurveCanvas.width;
    const height = bellCurveCanvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw the bell curve
    ctx.beginPath();
    const scaleFactor = window.innerWidth <= 768 ? 1.5 : 2; // Smaller scaling on mobile
    for (let x = -3; x <= 3; x += 0.01) {
        const y = Math.exp(-0.5 * x ** 2) / Math.sqrt(2 * Math.PI); // Gaussian distribution formula
        const canvasX = ((x + 3) / 6) * width; // Map x to canvas
        const canvasY = height - y * height * scaleFactor; // Scale y to fit the canvas
        ctx.lineTo(canvasX, canvasY);
    }
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Mark the z-score
    const zCanvasX = ((zScore + 3) / 6) * width;
    ctx.beginPath();
    ctx.moveTo(zCanvasX, 0);
    ctx.lineTo(zCanvasX, height);
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Redraw the curve when the window is resized
window.addEventListener("resize", () => drawBellCurve(parseFloat(zSlider.value)));

// Initial draw
drawBellCurve(0);
