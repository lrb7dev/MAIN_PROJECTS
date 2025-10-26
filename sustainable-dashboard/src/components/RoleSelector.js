// src/components/RoleSelector.js
import React from 'react';
import { useAuth, ROLES } from '../hooks/useAuth';

const RoleSelector = () => {
  const { userRole, loginAs } = useAuth();
  
  const handleRoleChange = (e) => {
    loginAs(e.target.value);
  };
  
  const selectorStyle = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    zIndex: 100,
  };

  return (
    <div style={selectorStyle}>
      <label htmlFor="role-selector" style={{marginRight: '10px', fontWeight: '600'}}>
        Simular Acesso:
      </label>
      <select 
        id="role-selector" 
        value={userRole} 
        onChange={handleRoleChange}
      >
        {/* Mapeando as opções a partir dos ROLES definidos */}
        {Object.values(ROLES).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleSelector;