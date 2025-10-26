// src/components/KpiCard.js
import React from 'react';

/**
 * Componente para exibição de uma Métrica Chave (KPI).
 * @param {string} label - Descrição do KPI (ex: 'Diversidade Média').
 * @param {string} value - O valor principal (ex: '45%').
 * @param {string} unit - Unidade ou contexto (ex: 'vs. Ano Anterior').
 * @param {string} color - Cor de destaque.
 */
const KpiCard = ({ label, value, unit, color }) => {
  // Estilização interna para simplicidade e destaque da cor
  const valueStyle = {
    color: color,
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const labelStyle = {
    fontSize: '0.9em',
    color: '#666', // Cor de texto suave
    textTransform: 'uppercase',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
      <div style={{ fontSize: '0.8em', color: '#999' }}>{unit}</div>
    </div>
  );
};

export default KpiCard;