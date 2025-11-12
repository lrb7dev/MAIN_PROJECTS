import React from 'react';

// Função auxiliar para converter Kelvin para Celsius, se necessário (a API já está configurada para Celsius)
// const kelvinToCelsius = (k) => (k - 273.15).toFixed(1); 

function WeatherDisplay({ data, isLoading, error }) {
  // 1. Estados de Carregamento e Erro
  if (isLoading) {
    return <div className="weather-card loading">Carregando dados do tempo...</div>;
  }

  if (error) {
    return <div className="weather-card error-message">Erro: {error}</div>;
  }

  if (!data) {
    return <div className="weather-card info-message">Pesquise por uma cidade para ver a previsão.</div>;
  }

  // 2. Desestruturação dos dados relevantes
  const { 
    name, 
    sys: { country }, 
    main: { temp, feels_like, temp_min, temp_max, humidity }, 
    weather 
  } = data;
  
  // Ícone de exemplo. A OpenWeatherMap usa um código de 3 dígitos (ex: "04d")
  const iconCode = weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = weather[0]?.description;
  
  // 3. Renderização dos dados
  return (
    <div className="weather-card result">
      <h2 className="city-name">{name}, {country}</h2>
      
      <div className="main-temp-section">
        <img src={iconUrl} alt={description} className="weather-icon" />
        <p className="temperature">
          {temp.toFixed(0)}°C
        </p>
      </div>
      
      <p className="description">
        **{description.charAt(0).toUpperCase() + description.slice(1)}**
      </p>

      <div className="details-grid">
        <div className="detail-item">
          <p>🌡️ Sensação:</p>
          <p>{feels_like.toFixed(1)}°C</p>
        </div>
        <div className="detail-item">
          <p>💧 Umidade:</p>
          <p>{humidity}%</p>
        </div>
        <div className="detail-item">
          <p>⬆️ Máx:</p>
          <p>{temp_max.toFixed(1)}°C</p>
        </div>
        <div className="detail-item">
          <p>⬇️ Mín:</p>
          <p>{temp_min.toFixed(1)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;