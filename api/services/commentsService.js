// Importa o modelo de comentários que contém as operações de acesso aos dados
const commentModel = require('../models/commentModel');

// Função que retorna todos os comentários chamando o método 'getAll' do modelo de comentários
const getAll = () => {
    return commentModel.getAll();
};

// Função que insere um novo comentário chamando o método 'insert' do modelo de comentários
const insertComment = (comment) => {
    commentModel.insert(comment);
};

// Exporta as funções 'getAll' e 'insertComment' para serem utilizadas em outras partes da aplicação
module.exports = { getAll, insertComment };
