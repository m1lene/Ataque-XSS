const express = require('express');
const cors = require('cors');
const app = express();

// Configura CORS para permitir requisições de qualquer origem
app.use(cors({
    origin: '*',
    methods: 'POST, GET, OPTIONS',
    allowedHeaders: 'Authorization, Content-Type',
}));

// Configura o Express para interpretar o corpo das requisições como JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a porta na qual o servidor irá escutar as requisições
const port = 3001;

// Rota POST que captura o token e o corpo da requisição
app.post('/', (req, res) => {
    const token = req.headers['authorization'];

    // Exibe o token capturado
    if (token) {
        console.log(`Token capturado: ${token}`);
    } else {
        console.log('Nenhum token recebido.');
    }
    
    console.log('---------');
    
    return res.status(200).send();
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`API atacante rodando - http://localhost:${port}`);
});
