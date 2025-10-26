// src/hooks/useAuth.js
import React, { createContext, useContext, useState } from 'react';

// Níveis de acesso simulados
export const ROLES = {
    ADMIN: 'Admin',
    READER_ESG: 'Leitor ESG',
    READER_GOV: 'Leitor Governança',
    GUEST: 'Convidado', // Nível sem privilégios
};

// 1. Criação do Contexto
const AuthContext = createContext();

// 2. Hook Personalizado
export const useAuth = () => useContext(AuthContext);

// 3. Provedor do Contexto
export const AuthProvider = ({ children }) => {
    // Estado inicial: Admin
    const [userRole, setUserRole] = useState(ROLES.ADMIN); 

    // Função para simular o login (mudar o nível de acesso)
    const loginAs = (role) => {
        setUserRole(role);
        alert(`Logado como: ${role}`);
    };
    
    // Funções de verificação de permissão
    const canSeeEnvironmental = userRole === ROLES.ADMIN || userRole === ROLES.READER_ESG;
    const canSeeSocial = userRole === ROLES.ADMIN || userRole === ROLES.READER_ESG;
    const canSeeGovernance = userRole === ROLES.ADMIN || userRole === ROLES.READER_GOV;
    const isAuthenticated = userRole !== ROLES.GUEST;

    const contextValue = {
        userRole,
        loginAs,
        isAuthenticated,
        canSeeEnvironmental,
        canSeeSocial,
        canSeeGovernance,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};