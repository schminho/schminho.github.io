import React from 'react';

interface ScoreFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function ScoreField({ label, value, onChange }: ScoreFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-purple-300 font-semibold mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-400 transition-all
                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
}