const express = require("express");
const app = express();
const router = express.Router();


const porta = 3333;

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

function mostraMulher(request, response) {
    response.json({
        nome: "Ada Lovelace",
        profissao: "Matemática",
        id: 1
    });
}

app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);