// src/components/charts/LineChart.js
import React from 'react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

/**
 * Gráfico de Linha Reutilizável com Recharts
 * @param {Array} data - Os dados do gráfico.
 * @param {string} dataKey - A chave do eixo X (ex: 'name' para o mês).
 * @param {string} lineKey - A chave do valor da linha (ex: 'Carbono (t)').
 * @param {string} color - A cor da linha.
 */
const LineChart = ({ data, dataKey, lineKey, color }) => {
  return (
    // ResponsiveContainer garante que o gráfico se ajuste ao tamanho do DashboardCard
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart 
        data={data}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }} // Ajuste de margem
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" /> {/* Linhas de grade suaves */}
        
        {/* Eixo X: Exibe os meses/nomes */}
        <XAxis dataKey={dataKey} stroke="#888" /> 
        
        {/* Eixo Y: Exibe os valores da métrica */}
        <YAxis stroke="#888" /> 
        
        {/* Tooltip: Interatividade crucial. Aparece ao passar o mouse. */}
        <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        
        {/* Legenda: útil para múltiplas linhas. */}
        <Legend />
        
        {/* Linha Principal do Gráfico */}
        <Line 
          type="monotone" // Tipo de curva (suave)
          dataKey={lineKey} // A métrica a ser plotada (ex: 'Carbono (t)')
          stroke={color} // Cor da linha
          activeDot={{ r: 8 }} // Ponto ativo ao passar o mouse
          strokeWidth={2}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;