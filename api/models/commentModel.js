// Importa o módulo 'fs' do Node.js para manipulação de arquivos
const fs = require('fs');

// Define o caminho para o arquivo JSON onde os comentários serão armazenados
const FILE_PATH = `${__dirname}/../data/data.json`;

// Função que lê e retorna todos os comentários do arquivo JSON
const getAll = () => {
    // Lê o conteúdo do arquivo JSON
    const fileText = fs.readFileSync(FILE_PATH);
    // Converte o conteúdo do arquivo (texto) para um objeto JavaScript e retorna
    return JSON.parse(fileText);
}

// Função que insere um novo comentário no arquivo JSON
const insert = (comment) => {
    // Obtém todos os comentários existentes
    const allComments = getAll();
    // Adiciona o novo comentário ao array de comentários existentes
    allComments.push(comment);
    // Escreve o array atualizado de comentários de volta no arquivo JSON
    fs.writeFileSync(FILE_PATH, JSON.stringify(allComments));
}

// Exporta as funções 'getAll' e 'insert' para serem usadas em outras partes da aplicação
module.exports = { getAll, insert };
