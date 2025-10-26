// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  // Usando o Hook Personalizado
  const { isDarkMode, toggleTheme } = useTheme();

  const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isDarkMode ? '#4CAF50' : '#2196F3', // Cores diferentes para cada tema
    color: 'white',
    fontWeight: 'bold',
    zIndex: 100, // Garante que fique por cima de tudo
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle}>
      {isDarkMode ? '🌙 Light Mode' : '☀️ Dark Mode'}
    </button>
  );
};

export default ThemeToggle;