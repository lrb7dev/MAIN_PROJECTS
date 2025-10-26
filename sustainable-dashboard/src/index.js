// src/index.js 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import { ThemeProvider } from './hooks/useTheme'; 
// Importado o Provedor de Autenticação
import { AuthProvider } from './hooks/useAuth'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
      {/* Envolvendo com o AuthProvider */}
      <AuthProvider> 
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);