'use client'; // Necessário para usar hooks de estado (React features)

import { useState } from 'react';
import { useWeather } from '@/hooks/useWeather'; // Importa o hook customizado
import WeatherDisplay from '@/components/WeatherDisplay'; // Importa o componente de visualização

export default function Home() {
  const [city, setCity] = useState('');
  
  // 1. Consome o hook customizado, obtendo os estados e a função de busca
  const { data, isLoading, error, fetchWeather } = useWeather();

  const handleSearch = (e) => {
    e.preventDefault();
    // 2. Chama a função de busca com a cidade atual
    fetchWeather(city);
  };

  return (
    <div className="container">
      <h1 className="title">☀️ Previsão do Tempo Interativa</h1>
      
      {/* Formulário de Busca */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Digite o nome da cidade (ex: São Paulo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
          required
        />
        <button 
          type="submit" 
          className="search-button" 
          disabled={isLoading} // Desabilita o botão durante o carregamento
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
      
      {/* Componente de Exibição de Resultado */}
      <WeatherDisplay 
        data={data} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
}