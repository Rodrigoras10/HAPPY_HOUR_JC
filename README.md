# 🍻 HAPPY_HOUR_JC

Sistema inteligente para gerenciamento de Happy Hour em bares, hamburguerias e açaíterias! O cliente escaneia um código de barras e ganha mais tempo de promoção 🎉

## 🚀 Funcionalidades

- Cronômetro de happy hour com extensão via código de barras
- Sistema de login para administradores
- Painel administrativo para definir promoções
- Impressão e leitura de códigos de barras (Elgin, Epson e Bematech)
- Banco de dados MongoDB via Docker
- Design responsivo com frontend em HTML/CSS/JS

## 🛠️ Tecnologias

- Node.js + Express
- MongoDB (com Docker)
- Frontend puro (HTML, CSS, JavaScript)
- Impressoras térmicas + Leitor de código de barras

## 🔧 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/rodrigoras10/HAPPY_HOUR_JC.git

# Acesse a pasta do backend
cd HAPPY_HOUR_JC/backend

# Inicie com Docker
docker compose up -d --build

# Acesse no navegador
http://localhost:3000
