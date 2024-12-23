import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

export default function SimpleInterestExplanation() {
  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        Entendendo Juros Simples
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-300">
            Juros simples é a forma mais básica de calcular juros. O valor dos juros é calculado apenas sobre o valor principal,
            sem considerar os juros acumulados em períodos anteriores.
          </p>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-emerald-400">Fórmula</h4>
            <p className="font-mono bg-gray-800 p-2 rounded">J = P × i × t</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>J = Juros</li>
              <li>P = Principal (valor inicial)</li>
              <li>i = Taxa de juros (em decimal)</li>
              <li>t = Tempo</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-emerald-400">Características</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Crescimento linear do montante</li>
              <li>Juros calculados apenas sobre o principal</li>
              <li>Geralmente usado em empréstimos de curto prazo</li>
              <li>Mais fácil de calcular manualmente</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-emerald-500" />
              Crescimento Linear
            </h4>
            <img
              src="https://images.unsplash.com/photo-1543286386-2e659306cd6c"
              alt="Gráfico de crescimento linear"
              className="w-full h-48 object-cover rounded-lg opacity-75"
            />
            <p className="mt-2 text-sm text-gray-300">
              O gráfico mostra o crescimento linear característico dos juros simples,
              onde o aumento é constante ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}