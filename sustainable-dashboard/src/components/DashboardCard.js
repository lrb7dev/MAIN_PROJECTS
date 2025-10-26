// src/components/DashboardCard.js
import React from 'react';
import '../styles/DashboardLayout.css'; // Importa os estilos

/**
 * Componente reutilizável para envolver gráficos e KPIs.
 * * @param {string} title - O título do widget.
 * @param {React.Node} children - O conteúdo interno (gráfico ou KPI).
 */
const DashboardCard = ({ title, children }) => {
  return (
    <div className="dashboard-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;