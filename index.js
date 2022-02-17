const { application } = require('express')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000 // Variavel de Ambiente


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(`Buscando o usuario pelo id: ${id}`)
    res.send("Buscando usuario, aguarde...")
})


// Criando rota
app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

// Rodando aplicação
app.listen(port, () => {
    console.log(`Aplicação está rodando na porta: ${port}`)
})