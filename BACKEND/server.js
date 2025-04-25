require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Rotas modulares
const authRoutes = require('./routes/authRoutes');
const qrRoutes = require('./routes/qrRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/happyhour';

// Middlewares
app.use(express.json());
app.use(cors());

// Servir arquivos estáticos
// 1) Admin: coloque admin.html em backend/public
app.use(express.static(path.join(__dirname, 'public')));
// 2) Frontend: seus arquivos HTML/CSS/JS puros
app.use(express.static(path.join(__dirname, '../frontend')));

// Registrar rotas
app.use('/api/auth', authRoutes);
app.use('/api/qr', qrRoutes);

// Rota de teste simples
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Conectar ao MongoDB e iniciar o servidor
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado ao MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Falha ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

startServer();
