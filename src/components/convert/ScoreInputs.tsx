import React from 'react';
import { ScoreField } from './ScoreField';
import type { Scores } from '../../types/scores';

interface ScoreInputsProps {
  scores: Scores;
  onScoreChange: (value: number, type: keyof Scores) => void;
}

export function ScoreInputs({ scores, onScoreChange }: ScoreInputsProps) {
  const fields = [
    { label: 'Z Score', value: scores.zScore, type: 'zScore' },
    { label: 'T Score', value: scores.tScore, type: 'tScore' },
    { label: 'IQ Score', value: scores.iqScore, type: 'iqScore' },
    { label: 'Standard Value', value: scores.standardValue, type: 'standardValue' },
    { label: 'Value Points', value: scores.valuePoints, type: 'valuePoints' },
    { label: 'Sten Score', value: scores.stenScore, type: 'stenScore' },
    { label: 'Stanine Score', value: scores.stanineScore, type: 'stanineScore' },
    { label: 'Percentile Rank', value: scores.percentileRank, type: 'percentileRank' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {fields.map((field) => (
        <ScoreField
          key={field.type}
          label={field.label}
          value={field.value}
          onChange={(value) => onScoreChange(value, field.type as keyof Scores)}
        />
      ))}
    </div>
  );
}