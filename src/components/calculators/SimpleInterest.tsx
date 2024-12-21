import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import InputField from '../ui/InputField';
import PeriodSelector from '../ui/PeriodSelector';

interface SimpleInterestProps {
  setResult: (value: number) => void;
}

export default function SimpleInterest({ setResult }: SimpleInterestProps) {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [isAnnual, setIsAnnual] = useState(true);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    
    if (isNaN(p) || isNaN(r) || isNaN(t)) return;
    
    const adjustedRate = isAnnual ? r / 12 : r;
    const interest = p * adjustedRate * t;
    setResult(interest);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Calculadora de Juros Simples</h2>
      <div className="space-y-4">
        <InputField
          label="Valor Principal (R$)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          type="number"
          placeholder="0.00"
        />
        
        <InputField
          label="Taxa de Juros (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          type="number"
          placeholder="0.00"
          periodSelector={
            <PeriodSelector isAnnual={isAnnual} onChange={setIsAnnual} />
          }
        />

        <InputField
          label="Tempo (meses)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="number"
          placeholder="0"
        />

        <button
          onClick={calculateInterest}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Calcular
        </button>
      </div>
    </div>
  );
}