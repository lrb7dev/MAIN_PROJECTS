// src/hooks/useTheme.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Criação do Contexto (armazena o tema atual e a função para mudá-lo)
const ThemeContext = createContext();

// 2. Hook Personalizado (simplifica o uso do tema nos componentes)
export const useTheme = () => useContext(ThemeContext);

// 3. Provedor do Contexto (envolve a aplicação e gerencia o estado)
export const ThemeProvider = ({ children }) => {
  // Inicializa o tema verificando se há uma preferência salva (ou usa 'light' como padrão)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true' ? true : false;
  });

  // Efeito colateral para aplicar o tema e salvar no localStorage
  useEffect(() => {
    // 1. Aplica o estilo ao <body> (para Dark Mode global)
    document.body.style.backgroundColor = isDarkMode ? '#121212' : '#f4f7f9';
    
    // 2. Salva a preferência do usuário
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const contextValue = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};