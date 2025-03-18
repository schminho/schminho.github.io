import { useState } from 'react';
import type { Scores } from '../types/scores';

export function useScoreCalculation() {
  const [scores, setScores] = useState<Scores>({
    zScore: 0,
    tScore: 50,
    iqScore: 100,
    standardValue: 100,
    valuePoints: 10,
    stenScore: 5.5,
    stanineScore: 5,
    percentileRank: 50,
  });

  const formatNumber = (num: number) => Math.round(num * 100) / 100;

  const updateFromZScore = (z: number) => {
    const clampedZ = Math.max(-3, Math.min(3, z));
    setScores({
      zScore: formatNumber(clampedZ),
      tScore: formatNumber(clampedZ * 10 + 50),
      iqScore: formatNumber(clampedZ * 15 + 100),
      standardValue: formatNumber(clampedZ * 10 + 100),
      valuePoints: formatNumber(clampedZ * 2 + 10),
      stenScore: formatNumber(clampedZ + 5.5),
      stanineScore: formatNumber(clampedZ + 5),
      percentileRank: formatNumber((clampedZ + 3) * 100 / 6),
    });
  };

  return { scores, updateFromZScore };
}