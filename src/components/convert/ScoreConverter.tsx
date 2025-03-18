import React, { useState } from 'react';
import { ScoreInputs } from './ScoreInputs';
import { BellCurve } from './BellCurve';
import { useScoreCalculation } from '../../hooks/useScoreCalculation';

export function ScoreConverter() {
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);
  const { scores, updateFromZScore } = useScoreCalculation();

  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Interactive Score Converter
      </h2>

      <ScoreInputs scores={scores} onScoreChange={updateFromZScore} />
      
      <div className="mt-12">
        <BellCurve
          zScore={scores.zScore}
          onZScoreChange={updateFromZScore}
          isHoveringSlider={isHoveringSlider}
          onSliderHoverChange={setIsHoveringSlider}
        />
      </div>
    </div>
  );
}