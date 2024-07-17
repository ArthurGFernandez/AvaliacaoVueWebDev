const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Caminho absoluto para o arquivo users.txt
const usersFilePath = path.join(__dirname, 'users.txt');

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const data = `${username},${password}\n`;

    // Grava os dados no arquivo users.txt
    fs.appendFile(usersFilePath, data, err => {
        if (err) {
            console.error('Error writing to users.txt:', err);
            res.status(500).send('Error registering user');
        } else {
            console.log('User registered:', username);
            res.send('User registered');
        }
    });
});

// Rota para realizar o login de um usuário
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = fs.readFileSync(usersFilePath, 'utf-8').split('\n');
    let isValidUser = false;

    // Verifica se o usuário está registrado
    users.forEach(user => {
        const [userUsername, userPassword] = user.split(',');
        if (userUsername === username && userPassword === password) {
            isValidUser = true;
        }
    });

    // Retorna a resposta com base na validação
    if (isValidUser) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
