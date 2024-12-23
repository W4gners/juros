import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import SimpleInterest from './calculators/SimpleInterest';
import CompoundInterest from './calculators/CompoundInterest';
import Financing from './calculators/Financing';
import Investment from './calculators/Investment';
import AdBanner from './AdBanner';
import SimpleInterestExplanation from './explanations/SimpleInterestExplanation';
import CompoundInterestExplanation from './explanations/CompoundInterestExplanation';
import FinancingExplanation from './explanations/FinancingExplanation';
import InvestmentExplanation from './explanations/InvestmentExplanation';

type CalculatorType = 'simple' | 'compound' | 'financing' | 'investment';

export default function Calculator() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('simple');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculatorChange = (calculatorType: CalculatorType) => {
    setActiveCalculator(calculatorType);
    setResult(null);
  };

  const calculators = [
    { id: 'simple', name: 'Juros Simples' },
    { id: 'compound', name: 'Juros Compostos' },
    { id: 'financing', name: 'Financiamento' },
    { id: 'investment', name: 'Investimentos' },
  ];

  const renderExplanation = () => {
    switch (activeCalculator) {
      case 'simple':
        return <SimpleInterestExplanation />;
      case 'compound':
        return <CompoundInterestExplanation />;
      case 'financing':
        return <FinancingExplanation />;
      case 'investment':
        return <InvestmentExplanation />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-6">
              <CalculatorIcon className="w-6 h-6 mr-2 text-emerald-500" />
              <h1 className="text-2xl font-bold">Calculadora Financeira</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => handleCalculatorChange(calc.id as CalculatorType)}
                  className={`p-3 rounded-lg transition-colors ${
                    activeCalculator === calc.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {calc.name}
                </button>
              ))}
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              {activeCalculator === 'simple' && <SimpleInterest setResult={setResult} />}
              {activeCalculator === 'compound' && <CompoundInterest setResult={setResult} />}
              {activeCalculator === 'financing' && <Financing setResult={setResult} />}
              {activeCalculator === 'investment' && <Investment setResult={setResult} />}
            </div>

            {result !== null && (
              <div className="mt-6 bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Resultado</h3>
                <p className="text-3xl font-bold text-emerald-500">
                  R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            )}
          </div>

          {renderExplanation()}
        </div>

        <div className="lg:col-span-1">
          <AdBanner />
        </div>
      </div>
    </div>
  );
}