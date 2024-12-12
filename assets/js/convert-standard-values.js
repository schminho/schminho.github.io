document.addEventListener("DOMContentLoaded", function () {
    // Select all required DOM elements
    const zScoreInput = document.getElementById("z-score");
    const tScoreInput = document.getElementById("t-score");
    const iqScoreInput = document.getElementById("iq-score");
    const zSlider = document.getElementById("z-slider");
    const bellCurveCanvas = document.getElementById("bell-curve");
    const ctx = bellCurveCanvas.getContext("2d");

    // Function to adjust canvas size dynamically
    function adjustCanvasSize() {
        const isMobile = window.innerWidth <= 768; // Detect mobile screens
        bellCurveCanvas.width = isMobile ? 300 : 500; // Smaller canvas on mobile
        bellCurveCanvas.height = isMobile ? 150 : 250; // Smaller height on mobile
    }

    // Function to draw the bell curve
    function drawBellCurve(zScore) {
        adjustCanvasSize(); // Adjust canvas dimensions dynamically

        const width = bellCurveCanvas.width;
        const height = bellCurveCanvas.height;

        if (!ctx) {
            console.error("Canvas context not found");
            return;
        }

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw the bell curve
        ctx.beginPath();
        const scaleFactor = window.innerWidth <= 768 ? 1.5 : 1.8; // Adjust scaling for mobile and desktop
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

    // Function to update values dynamically
    function updateValues(source) {
        const zScore = parseFloat(zScoreInput.value);
        const tScore = parseFloat(tScoreInput.value);
        const iqScore = parseFloat(iqScoreInput.value);

        if (source === "z-score" && !isNaN(zScore)) {
            tScoreInput.value = (50 + zScore * 10).toFixed(2);
            iqScoreInput.value = (100 + zScore * 15).toFixed(2);
            zSlider.value = zScore;
            drawBellCurve(zScore);
        } else if (source === "t-score" && !isNaN(tScore)) {
            const zFromT = (tScore - 50) / 10;
            zScoreInput.value = zFromT.toFixed(2);
            iqScoreInput.value = (100 + zFromT * 15).toFixed(2);
            zSlider.value = zFromT;
            drawBellCurve(zFromT);
        } else if (source === "iq-score" && !isNaN(iqScore)) {
            const zFromIQ = (iqScore - 100) / 15;
            zScoreInput.value = zFromIQ.toFixed(2);
            tScoreInput.value = (50 + zFromIQ * 10).toFixed(2);
            zSlider.value = zFromIQ;
            drawBellCurve(zFromIQ);
        } else if (source === "slider") {
            zScoreInput.value = zSlider.value;
            updateValues("z-score");
        }
    }

    // Event listeners for real-time updates
    zScoreInput.addEventListener("input", () => updateValues("z-score"));
    tScoreInput.addEventListener("input", () => updateValues("t-score"));
    iqScoreInput.addEventListener("input", () => updateValues("iq-score"));
    zSlider.addEventListener("input", () => updateValues("slider"));

    // Redraw the curve when the window is resized
    window.addEventListener("resize", () => drawBellCurve(parseFloat(zSlider.value)));

    // Initial draw
    drawBellCurve(0);
});
