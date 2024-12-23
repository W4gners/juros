import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import InputField from '../ui/InputField';
import PeriodSelector from '../ui/PeriodSelector';
import { parseLocaleNumber } from '../../utils/numberFormat';

interface FinancingProps {
  setResult: (value: number) => void;
}

export default function Financing({ setResult }: FinancingProps) {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [isAnnual, setIsAnnual] = useState(true);

  const calculatePayment = () => {
    const p = parseLocaleNumber(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    
    if (isNaN(p) || isNaN(r) || isNaN(t)) return;
    
    const monthlyRate = isAnnual ? r / 12 : r;
    const payment = (p * monthlyRate * Math.pow(1 + monthlyRate, t)) / (Math.pow(1 + monthlyRate, t) - 1);
    setResult(payment);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Calculadora de Financiamento</h2>
      <div className="space-y-4">
        <InputField
          label="Valor do Financiamento (R$)"
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
          label="Prazo (meses)"
          value={time}
          onChange={setTime}
          type="number"
          placeholder="0"
        />

        <button
          onClick={calculatePayment}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Calcular Parcela
        </button>
      </div>
    </div>
  );
}