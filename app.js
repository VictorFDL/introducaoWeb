// const http = require('http')

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});

//     res.end("Bem vindo ao meu servidor!!");
// }).listen(3000);

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Estou na Home")
})

app.get("/contatos", (req, res) => {
    res.send'("Estou nos contatos")
})

app.listen(3000, () => {
    console.log('Servidor está rodando')
})