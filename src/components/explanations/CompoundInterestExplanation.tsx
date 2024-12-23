import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

export default function CompoundInterestExplanation() {
  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        Entendendo Juros Compostos
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-300">
            Juros compostos são calculados sobre o montante acumulado em cada período,
            incluindo os juros gerados anteriormente. Este é o tipo de juros mais comum
            em investimentos e empréstimos de longo prazo.
          </p>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-emerald-400">Fórmula</h4>
            <p className="font-mono bg-gray-800 p-2 rounded">M = P × (1 + i)^t</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>M = Montante final</li>
              <li>P = Principal (valor inicial)</li>
              <li>i = Taxa de juros (em decimal)</li>
              <li>t = Tempo</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-emerald-400">Características</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Crescimento exponencial</li>
              <li>Juros sobre juros</li>
              <li>Efeito mais significativo a longo prazo</li>
              <li>Usado na maioria dos produtos financeiros</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-emerald-500" />
              Crescimento Exponencial
            </h4>
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
              alt="Gráfico de crescimento exponencial"
              className="w-full h-48 object-cover rounded-lg opacity-75"
            />
            <p className="mt-2 text-sm text-gray-300">
              O gráfico demonstra o crescimento exponencial dos juros compostos,
              onde o aumento acelera ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}