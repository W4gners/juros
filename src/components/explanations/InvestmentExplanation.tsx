import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

export default function InvestmentExplanation() {
  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        Entendendo Investimentos
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-300">
            Investimentos são aplicações de recursos com objetivo de obter ganhos
            futuros. Com aportes regulares, o efeito dos juros compostos é
            potencializado pelo acúmulo constante de capital.
          </p>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-emerald-400">Fórmula</h4>
            <p className="font-mono bg-gray-800 p-2 rounded">VF = P × (1 + i)^t + PMT × ((1 + i)^t - 1) / i</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>VF = Valor futuro</li>
              <li>P = Principal (valor inicial)</li>
              <li>PMT = Aporte mensal</li>
              <li>i = Taxa de juros (em decimal)</li>
              <li>t = Tempo</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-emerald-400">Características</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Crescimento exponencial</li>
              <li>Benefício do aporte regular</li>
              <li>Efeito do tempo no resultado</li>
              <li>Poder dos juros compostos</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-emerald-500" />
              Crescimento do Investimento
            </h4>
            <img
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc"
              alt="Gráfico de crescimento do investimento"
              className="w-full h-48 object-cover rounded-lg opacity-75"
            />
            <p className="mt-2 text-sm text-gray-300">
              O gráfico ilustra como os aportes regulares combinados com juros
              compostos aceleram o crescimento do patrimônio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}