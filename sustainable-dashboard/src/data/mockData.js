// src/data/mockData.js

const generateMonthlyData = (metric, startValue, fluctuation) => {
  const data = [];
  const currentDate = new Date();
  
  for (let i = 11; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const monthYear = date.toLocaleString('pt-BR', { month: 'short', year: '2-digit' });
    
    // Simula uma flutuação mensal
    const value = Math.round(startValue + (Math.random() - 0.5) * fluctuation);
    
    data.push({
      name: monthYear,
      [metric]: value < 0 ? 0 : value, // Garante que o valor não seja negativo
    });
  }
  return data;
};

// Dados Ambientais (E)
export const renewableEnergyData = generateMonthlyData('Renovável (%)', 75, 15);
export const carbonEmissionData = generateMonthlyData('Carbono (t)', 450, 80);

// Dados Sociais (S)
export const diversityData = generateMonthlyData('Diversidade (%)', 35, 10);
export const trainingHoursData = generateMonthlyData('Treinamento (h)', 15, 5);

// Dados de Governança (G)
export const auditComplianceData = generateMonthlyData('Conformidade (%)', 92, 5);

// Métricas Chave (Key Performance Indicators - KPIs)
export const kpiData = {
    totalCarbonLastYear: carbonEmissionData.reduce((acc, curr) => acc + curr['Carbono (t)'], 0),
    avgDiversity: Math.round(diversityData.reduce((acc, curr) => acc + curr['Diversidade (%)'], 0) / diversityData.length),
    currentRenewable: renewableEnergyData[renewableEnergyData.length - 1]['Renovável (%)'],
};