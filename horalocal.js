const express = require("express");
const app = express();
const router = express.Router();


const porta = 3333;

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

function mostraHora(request, response) {

    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    const dia = data.toLocaleDateString('pt-BR')
    
    
    response.send("A hora atual é " + hora + " do dia " + dia);

}


app.use(router.get("/hora", mostraHora));
app.listen(porta, mostraPorta);