import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const app = express();
const porta = 3333;
const router = express.Router();
app.use(express.json());


const mulheres = [
    {
        id: "1",
        nome: "Ada Lovelace",
        profissao: "Matemática"
    },
    {   
        id: "2",
        nome: "Grace Hopper",
        profissao: "Almirante da Marinha"
    },
    {   
        id: "3",
        nome: "Hedy Lamarr",
        profissao: "Atriz e Inventora"
    }
    
]

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

//GET
function mostraMulheres(request, response) {
response.json(mulheres);
}

//POST
function criaMulher(request, response) {
    const mulher = {
        id: uuidv4(),
        nome: request.body.nome,
        profissao: request.body.profissao
    }
    mulheres.push(mulher);
    response.json(mulheres);
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher;
        }
    }    

    const mulherEncontrada = mulheres.find(encontraMulher);

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome;
    }if (request.body.profissao) {
        mulherEncontrada.profissao = request.body.profissao;
    }

    response.json(mulherEncontrada);
}

//DELETE
function deletaMulher(request, response) {
    function encontraMulher(mulher) {
        return mulher.id === request.params.id;
    }

    const indice = mulheres.findIndex(encontraMulher);
    if (indice !== -1) {
        mulheres.splice(indice, 1);
    }
    response.json(mulheres);
}


app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', express.json(), criaMulher));
app.use(router.patch('/mulheres/:id', express.json(), corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));
app.listen(porta, mostraPorta);