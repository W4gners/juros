import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

export default function FinancingExplanation() {
  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        Entendendo Financiamentos
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-300">
            Financiamento é uma operação financeira onde uma quantia é emprestada
            e paga em parcelas periódicas. O sistema mais comum é o de amortização
            constante, onde as parcelas são fixas.
          </p>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-emerald-400">Fórmula</h4>
            <p className="font-mono bg-gray-800 p-2 rounded">PMT = P × (i × (1 + i)^n) / ((1 + i)^n - 1)</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>PMT = Valor da parcela</li>
              <li>P = Principal (valor financiado)</li>
              <li>i = Taxa de juros (em decimal)</li>
              <li>n = Número de parcelas</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-emerald-400">Características</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Parcelas fixas</li>
              <li>Juros compostos sobre o saldo devedor</li>
              <li>Amortização crescente</li>
              <li>Juros decrescentes</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-emerald-500" />
              Composição da Parcela
            </h4>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt="Gráfico de composição de parcelas"
              className="w-full h-48 object-cover rounded-lg opacity-75"
            />
            <p className="mt-2 text-sm text-gray-300">
              O gráfico mostra como a composição da parcela muda ao longo do tempo,
              com a amortização aumentando e os juros diminuindo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}