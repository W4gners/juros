import React from 'react';

interface PeriodSelectorProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
}

export default function PeriodSelector({ isAnnual, onChange }: PeriodSelectorProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <label className="flex items-center">
        <input
          type="radio"
          checked={isAnnual}
          onChange={() => onChange(true)}
          className="mr-2"
        />
        Anual
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          checked={!isAnnual}
          onChange={() => onChange(false)}
          className="mr-2"
        />
        Mensal
      </label>
    </div>
  );
}