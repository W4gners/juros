import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import InputField from '../ui/InputField';
import PeriodSelector from '../ui/PeriodSelector';
import { parseLocaleNumber } from '../../utils/numberFormat';

interface CompoundInterestProps {
  setResult: (value: number) => void;
}

export default function CompoundInterest({ setResult }: CompoundInterestProps) {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('12');
  const [isAnnual, setIsAnnual] = useState(true);

  const calculateInterest = () => {
    const p = parseLocaleNumber(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(frequency);
    
    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) return;
    
    const adjustedRate = isAnnual ? r / 12 : r;
    const amount = p * Math.pow(1 + adjustedRate / n, n * t);
    setResult(amount);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Calculadora de Juros Compostos</h2>
      <div className="space-y-4">
        <InputField
          label="Valor Principal (R$)"
          value={principal}
          onChange={setPrincipal}
          type="currency"
          placeholder="0,00"
        />
        
        <InputField
          label="Taxa de Juros (%)"
          value={rate}
          onChange={setRate}
          type="number"
          placeholder="0,00"
          periodSelector={
            <PeriodSelector isAnnual={isAnnual} onChange={setIsAnnual} />
          }
        />

        <InputField
          label="Tempo (meses)"
          value={time}
          onChange={setTime}
          type="number"
          placeholder="0"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Frequência de Capitalização
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full bg-gray-600 border-gray-500 rounded-lg p-2"
          >
            <option value="1">Anual</option>
            <option value="2">Semestral</option>
            <option value="4">Trimestral</option>
            <option value="12">Mensal</option>
            <option value="365">Diária</option>
          </select>
        </div>

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