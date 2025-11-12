# ☀️ Interactive Weather Forecast Application (Next.js)

Este é um projeto front-end moderno, consumo de APIs externas de forma assíncrona, e gerenciamento de estado complexo utilizando **Next.js (App Router)** e **React Hooks**.

## ✨ Destaques do Projeto

* **Next.js (App Router):** Estrutura de aplicação moderna e eficiente.
* **Consumo de API Externa:** Integração com a **OpenWeatherMap API** para dados em tempo real.
* **Gerenciamento de Estado Assíncrono:** Utilização de um **Custom Hook** (`useWeather`) para gerenciar os estados de carregamento (`isLoading`), dados (`data`) e erro (`error`).
* **Componentização:** Interface organizada com componentes dedicados para exibição de dados (`WeatherDisplay`).
* **Variáveis de Ambiente:** Uso seguro de variáveis de ambiente (`.env.local`) para armazenar a API Key.

------------------------------------------------------------------------
## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Framework** | Next.js (14+) |
| **Linguagem** | JavaScript (ES6+), HTML |
| **Estilização** | CSS Modules (padrão Next.js) |
| **Biblioteca** | React |
| **API** | OpenWeatherMap |

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para clonar e executar o projeto em seu ambiente local.
------------------------------------------------------------------------
### 1. Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou Yarn/pnpm) instalados.

------------------------------------------------------------------------
### 2. Clonar o Repositório

```bash:
git clone [https://github.com/SEU_USUARIO/weather-app.git](https://github.com/SEU_USUARIO/weather-app.git)
cd weather-app

------------------------------------------------------------------------
3. Instalar Dependências
```bash:

npm 

------------------------------------------------------------------------
4. Configurar a API Key
O projeto requer uma chave da API OpenWeatherMap.

Crie uma conta na OpenWeatherMap e obtenha sua API Key.

Crie um arquivo chamado .env.local na raiz do projeto (weather-app).

Adicione as seguintes variáveis, substituindo o placeholder pela sua chave:

NEXT_PUBLIC_WEATHER_API_KEY=SUA_CHAVE_OBTIDA_DO_OPENWEATHERMAP
NEXT_PUBLIC_WEATHER_API_URL=[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)

------------------------------------------------------------------------
5. Executar o Servidor
Inicie o servidor de desenvolvimento:

```Bash:
npm run dev

O aplicativo estará acessível em: http://localhost:3000

------------------------------------------------------------------------
🗺️ Estrutura do Código
A arquitetura do projeto é baseada nas convenções do Next.js App Router:

src/app/page.js: A página principal que contém a lógica de estado do formulário e integra o hook customizado (useWeather) e o componente de visualização (WeatherDisplay).

src/hooks/useWeather.js: O Custom Hook responsável por toda a lógica assíncrona, buscando dados da API e gerenciando isLoading, data e error.

src/components/WeatherDisplay.js: Componente de apresentação (UI) que recebe os dados e os exibe de forma estruturada.

src/app/globals.css: Estilização completa do projeto.