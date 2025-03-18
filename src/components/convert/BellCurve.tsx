import React, { useRef, useEffect, useState } from 'react';
import { useBellCurveDrawing } from '../../hooks/useBellCurveDrawing';

interface BellCurveProps {
  zScore: number;
  onZScoreChange: (score: number) => void;
  isHoveringSlider: boolean;
  onSliderHoverChange: (isHovering: boolean) => void;
}

export function BellCurve({
  zScore,
  onZScoreChange,
  isHoveringSlider,
  onSliderHoverChange,
}: BellCurveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHoveringLine, setIsHoveringLine] = useState(false);
  const isDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const initialZScoreRef = useRef(0);

  const { drawBellCurve } = useBellCurveDrawing(canvasRef, zScore, isHoveringLine);

  useEffect(() => {
    drawBellCurve();
  }, [zScore, isHoveringLine, drawBellCurve]);

  const handleInteractionStart = (x: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const relativeX = x - rect.left;
    const width = canvas.width / window.devicePixelRatio;
    const indicatorX = (zScore * (width / 6)) + width / 2;

    if (Math.abs(relativeX - indicatorX) < 20) {
      isDraggingRef.current = true;
      touchStartXRef.current = relativeX;
      initialZScoreRef.current = zScore;
    }
  };

  const handleInteractionMove = (x: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const relativeX = x - rect.left;
    const width = canvas.width / window.devicePixelRatio;
    const indicatorX = (zScore * (width / 6)) + width / 2;

    setIsHoveringLine(Math.abs(relativeX - indicatorX) < 20);

    if (!isDraggingRef.current) return;

    const deltaX = relativeX - touchStartXRef.current;
    const deltaZ = (deltaX / (width / 6));
    const newZScore = initialZScoreRef.current + deltaZ;
    onZScoreChange(Math.max(-3, Math.min(3, newZScore)));
  };

  const handleInteractionEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-900 p-6 rounded-xl shadow-xl
                  border border-purple-500/10 backdrop-blur-sm transition-transform duration-300">
      <div className="relative group">
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full rounded-lg cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={(e) => handleInteractionStart(e.clientX)}
          onMouseMove={(e) => handleInteractionMove(e.clientX)}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleInteractionMove(e.touches[0].clientX)}
          onTouchEnd={handleInteractionEnd}
        />
        <div className="absolute inset-0 rounded-lg ring-1 ring-purple-500/20 group-hover:ring-purple-500/30 
                      transition-all duration-300" />
      </div>

      <div className="mt-8 relative">
        <label className="text-purple-300 font-semibold block mb-4 text-center">
          Adjust Score
        </label>
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 
                        rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={zScore}
            onChange={(e) => onZScoreChange(parseFloat(e.target.value))}
            className="relative w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full appearance-none 
                     cursor-grab active:cursor-grabbing
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                     [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/50
                     [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-purple-300/50
                     [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300
                     [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:hover:shadow-purple-500/75
                     [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5
                     [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
                     [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:shadow-purple-500/50
                     [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-purple-300/50
                     [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-300
                     [&::-moz-range-thumb]:hover:scale-125 [&::-moz-range-thumb]:hover:shadow-purple-500/75"
            onMouseEnter={() => onSliderHoverChange(true)}
            onMouseLeave={() => onSliderHoverChange(false)}
          />
        </div>
      </div>
    </div>
  );
}