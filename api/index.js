const express = require('express');
const cors = require('cors');
const commentService = require('./services/commentsService');
const app = express();

// Habilita o CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a porta na qual o servidor irá escutar as requisições
const port = 3000;

// Rota GET para '/api/comment' que busca todos os comentários
app.get('/api/comment', (req, res) => {
    const comments = commentService.getAll();
    return res.status(200).json({ comments });
});

// Rota POST para '/api/comment' que insere um novo comentário
app.post('/api/comment', (req, res) => {
    const comment = req.body;
    commentService.insertComment(comment);
    return res.status(201).json(comment);
});

// Inicia o servidor na porta especificada e exibe uma mensagem no console
app.listen(port, () => {
    console.log(`API de comentários rodando - http://localhost:${port}`);
});
