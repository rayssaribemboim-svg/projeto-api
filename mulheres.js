const express = require("express");
const app = express();
const router = express.Router();

const mulheres = [
    {
        nome: "Ada Lovelace",
        profissao: "Matemática"
    },
    {   nome: "Grace Hopper",
        profissao: "Almirante da Marinha"
    },
    {   nome: "Hedy Lamarr",
        profissao: "Atriz e Inventora"
    }
    
]

const porta = 3333;

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

function mostraMulheres(request, response) {
response.json(mulheres);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);