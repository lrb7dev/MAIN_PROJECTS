// src/hooks/useRealTimeData.js
import { useState, useEffect } from 'react';
import { 
    carbonEmissionData, 
    renewableEnergyData, 
    kpiData,
    auditComplianceData 
} from '../data/mockData';

// Função para simular uma pequena flutuação no último ponto de dados
const fluctuateData = (data, metric) => {
    // Cria uma cópia do array de dados
    const newData = [...data];
    // Pega o último objeto do array (o dado mais recente)
    const lastDataPoint = { ...newData[newData.length - 1] };
    
    // Simula uma flutuação aleatória de +/- 5% do valor atual
    const fluctuation = lastDataPoint[metric] * (Math.random() * 0.1 - 0.05);
    
    // Atualiza o valor
    lastDataPoint[metric] = Math.round(lastDataPoint[metric] + fluctuation);
    
    // Adiciona o novo valor ao final
    newData[newData.length - 1] = lastDataPoint;
    
    return newData;
};

/**
 * Hook Personalizado para simular a atualização de dados em tempo real.
 */
export const useRealTimeData = (updateInterval = 5000) => {
    // Estado inicial dos dados
    const [dataState, setDataState] = useState({
        carbonEmissionData: carbonEmissionData,
        renewableEnergyData: renewableEnergyData,
        auditComplianceData: auditComplianceData,
        kpiData: kpiData,
    });

    useEffect(() => {
        // 1. Configura o intervalo de atualização
        const intervalId = setInterval(() => {
            setDataState(prevData => {
                // 2. Cria uma nova versão dos dados com flutuação
                const newCarbon = fluctuateData(prevData.carbonEmissionData, 'Carbono (t)');
                const newRenewable = fluctuateData(prevData.renewableEnergyData, 'Renovável (%)');
                const newAudit = fluctuateData(prevData.auditComplianceData, 'Conformidade (%)');

                // 3. Atualiza os dados de KPI com base nos novos dados
                const newKpiData = {
                    ...prevData.kpiData,
                    currentRenewable: newRenewable[newRenewable.length - 1]['Renovável (%)'],
                    // Não irei recalcular a média ou total aqui para manter a simulação simples
                };
                
                return {
                    carbonEmissionData: newCarbon,
                    renewableEnergyData: newRenewable,
                    auditComplianceData: newAudit,
                    kpiData: newKpiData,
                };
            });
        }, updateInterval); // Atualiza a cada 5 segundos

        // 4. Cleanup: O useEffect deve sempre limpar o intervalo ao desmontar.
        return () => clearInterval(intervalId);
    }, [updateInterval]);

    return dataState;
};