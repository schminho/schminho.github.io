import { useCallback } from 'react';

export function useBellCurveDrawing(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  zScore: number,
  isHoveringLine: boolean
) {
  const drawBellCurve = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Create gradient for the curve
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.4)');    // purple-600
    gradient.addColorStop(0.5, 'rgba(217, 70, 239, 0.4)');  // pink-600
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0.4)');    // purple-600

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw bell curve with gradient
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = 0; x <= width; x++) {
      const z = (x - width / 2) / (width / 6);
      const y = Math.exp(-0.5 * z * z) * height * 0.8;
      ctx.lineTo(x, height - y);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add subtle grid lines
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let x = -3; x <= 3; x++) {
      const xPos = (x * (width / 6)) + width / 2;
      ctx.beginPath();
      ctx.moveTo(xPos, 0);
      ctx.lineTo(xPos, height);
      ctx.stroke();
    }

    // Draw vertical indicator line with glow effect
    const indicatorX = (zScore * (width / 6)) + width / 2;
    
    // Glow effect
    ctx.shadowColor = isHoveringLine ? '#FFB3F3' : '#F9A8D4';
    ctx.shadowBlur = 15;
    
    ctx.beginPath();
    ctx.moveTo(indicatorX, 0);
    ctx.lineTo(indicatorX, height);
    ctx.strokeStyle = isHoveringLine ? '#FFB3F3' : '#F9A8D4';
    ctx.lineWidth = isHoveringLine ? 4 : 3;
    ctx.stroke();
    
    // Reset shadow
    ctx.shadowBlur = 0;
  }, [zScore, isHoveringLine]);

  return { drawBellCurve };
}