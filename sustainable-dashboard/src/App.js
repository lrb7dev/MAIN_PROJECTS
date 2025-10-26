// src/App.js
import React from 'react';
import './styles/DashboardLayout.css'; 
import DashboardCard from './components/DashboardCard'; 
import LineChart from './components/charts/LineChart'; 
import KpiCard from './components/KpiCard'; 
import ThemeToggle from './components/ThemeToggle'; 
import RoleSelector from './components/RoleSelector'; 
import { useTheme } from './hooks/useTheme';
import { useAuth } from './hooks/useAuth'; 
import { useRealTimeData } from './hooks/useRealTimeData'; // Importar o novo hook

// Removido as importações diretas de mockData, pois agora vêm do hook
// import { ... } from './data/mockData'; 


function App() {
  const { isDarkMode } = useTheme(); 
  const { canSeeEnvironmental, canSeeSocial, canSeeGovernance } = useAuth(); 
  
  // USA O HOOK PARA PEGAR DADOS ATUALIZADOS!
  const { 
    carbonEmissionData, 
    kpiData, 
    auditComplianceData 
    // Outros dados (renewableEnergyData) estão disponíveis no dataState,
    // mas só utiliza realmente os que vão ser atualizados nos cards/gráficos.
  } = useRealTimeData(5000); // intervalo de 5 segundos

  const containerClass = `dashboard-container ${isDarkMode ? 'dark-mode' : ''}`;
  
  const AccessDenied = ({ feature }) => (
    <DashboardCard title={`${feature} (Acesso Negado)`}>
      <p style={{textAlign: 'center', color: 'red'}}>
          Você não tem permissão para visualizar esta métrica.
      </p>
    </DashboardCard>
  );

  return (
    <div className={containerClass}> 
      <ThemeToggle />
      <RoleSelector /> 

      {/* 1. GRÁFICO: Emissão de Carbono (Ambiental - E) */}
      {/* Usa carbonEmissionData */}
      {canSeeEnvironmental ? (
        <DashboardCard title="Emissão Mensal de Carbono (Toneladas)">
          <LineChart 
            data={carbonEmissionData} 
            dataKey="name" 
            lineKey="Carbono (t)" 
            color={isDarkMode ? "#FFD700" : "#FF6384"} 
          />
        </DashboardCard>
      ) : (
        <AccessDenied feature="Emissão de Carbono" />
      )}
      
      {/* 2. KPI: Energia Renovável Atual (Ambiental - E) */}
      {/* Usa kpiData.currentRenewable */}
      {canSeeEnvironmental ? (
        <DashboardCard title="Energia Renovável Atual">
          <KpiCard
            label="Percentual de Uso"
            value={`${kpiData.currentRenewable}%`} 
            unit="Meta: 80%"
            color="#36A2EB" 
          />
        </DashboardCard>
      ) : (
        <AccessDenied feature="Energia Renovável" />
      )}

      {/* 3. KPI: Diversidade na Liderança (Social - S) */}
      {canSeeSocial ? (
        <DashboardCard title="Diversidade de Gênero (Liderança)">
          {/* Média estática mantida (kpiData.avgDiversity) para simular que 
              alguns KPIs atualizam em tempo real e outros são estáticos/calculados anualmente. */}
          <KpiCard
            label="Média Anual"
            value={`${kpiData.avgDiversity}%`} 
            unit="Reflete o último ano"
            color="#FF9F40" 
          />
        </DashboardCard>
      ) : (
        <AccessDenied feature="Diversidade" />
      )}

      {/* 4. GRÁFICO: Conformidade de Auditoria (Governança - G) */}
      {/* Usa auditComplianceData */}
      {canSeeGovernance ? (
        <DashboardCard title="Conformidade de Auditoria (Últimos 12 meses)">
            <LineChart 
                data={auditComplianceData}
                dataKey="name"
                lineKey="Conformidade (%)"
                color="#4BC0C0"
            />
        </DashboardCard>
      ) : (
        <AccessDenied feature="Conformidade de Auditoria" />
      )}
      
      {/* 5. KPI: Carbono Total (Ambiental - E) */}
      {/* Estático mantido para fins de demonstração (cálculo anual) */}
      {canSeeEnvironmental ? (
        <DashboardCard title="Emissão de Carbono Total (Último Ano)">
          <KpiCard
            label="Total Emitido"
            value={kpiData.totalCarbonLastYear.toLocaleString()}
            unit="Toneladas"
            color="#FF6384"
          />
        </DashboardCard>
      ) : (
        <AccessDenied feature="Total de Carbono" />
      )}
      
    </div>
  );
}

export default App;