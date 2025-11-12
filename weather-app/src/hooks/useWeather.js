import { useState, useCallback } from 'react';

// Variáveis de ambiente
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

/**
 * Hook customizado para buscar dados de previsão do tempo.
 * @returns {{ data: object | null, isLoading: boolean, error: string | null, fetchWeather: (city: string) => Promise<void> }}
 */
export function useWeather() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    if (!city) {
      setError("Por favor, insira o nome de uma cidade.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      // Endpoint da API: /weather?q={city name}&appid={API key}&units=metric&lang=pt_br
      const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        // Lidar com erros HTTP (ex: 404 Not Found)
        if (response.status === 404) {
          throw new Error("Cidade não encontrada. Verifique o nome.");
        }
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      }

      const weatherData = await response.json();
      
      setData(weatherData);

    } catch (err) {
      // Lidar com erros de rede ou a exceção que lançamos acima
      setError(err.message || "Ocorreu um erro desconhecido.");
      setData(null); // Garantir que os dados antigos sejam limpos em caso de erro
    } finally {
      setIsLoading(false);
    }
  }, []); // Dependências vazias, a função não precisa de nada fora dela

  return { data, isLoading, error, fetchWeather };
}