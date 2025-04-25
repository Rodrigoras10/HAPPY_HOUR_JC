const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;



let happyHourDoDia = 'Cerveja Heineken';

// Usuário e senha de administrador (em um caso real, isso deveria estar no banco de dados)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'senha123';

// Middleware para verificar se o usuário está autenticado
function checkAuth(req, res, next) {
    if (req.session.loggedIn) {
        return next();
    } else {
        res.status(403).json({ mensagem: 'Acesso negado. Você precisa estar logado como administrador.' });
    }
}

app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.get('/get-happy-hour', (req, res) => {
    res.json({ happyHour: happyHourDoDia });
});


app.post('/set-happy-hour', checkAuth, (req, res) => {
    const { item } = req.body;
    happyHourDoDia = item;
    res.json({ mensagem: `Happy Hour alterado para: ${item}` });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.loggedIn = true;
        res.json({ mensagem: 'Login bem-sucedido!' });
    } else {
        res.status(401).json({ mensagem: 'Credenciais inválidas!' });
    }
});


app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ mensagem: 'Erro ao fazer logout.' });
        }
        res.json({ mensagem: 'Logout bem-sucedido!' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
