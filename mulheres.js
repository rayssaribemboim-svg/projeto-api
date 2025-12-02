import express from 'express';
import bandoDeDados from './bandoDeDados.js';
bandoDeDados();
import Mulher from './mulherModel.js';
const app = express();
const porta = 3333;
const router = express.Router();
const cors = require('cors');
app.use(express.json());
app.use(cors());


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

//GET
async function mostraMulheres(request, response) {

    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find();
        response.json(mulheresVindasDoBancoDeDados);
    } catch (erro) {
        console.log(erro);
    }

    response.json();
}

//POST
async function criaMulher(request, response) {
    const mulher = new Mulher({
        nome: request.body.nome,
        profissao: request.body.profissao
    })

    try {
        const mulherCriada = await mulher.save();
        response.status(201).json(mulherCriada);
    } catch (erro) {
        console.log(erro);
    }

}

//PATCH
async function corrigeMulher(request, response) {

    try {

        const mulherEncontrada = await Mulher.findById(request.params.id);
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        } if (request.body.profissao) {
            mulherEncontrada.profissao = request.body.profissao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);

    } catch (erro) {
        console.log(erro);
    }


}

//DELETE
async function deletaMulher(request, response) {
    
    try{
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({message: 'Mulher deletada com sucesso!' });
    }catch(erro){
        console.log(erro);
    }
    
}


app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', express.json(), criaMulher));
app.use(router.patch('/mulheres/:id', express.json(), corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));
app.listen(porta, mostraPorta);