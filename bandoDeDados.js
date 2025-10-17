import mongoose from "mongoose";

async function conectarBancoDeDados() {
    try {
        console.log('Conectando ao banco de dados...');
        await mongoose.connect('mongodb+srv://rayssaribemboim_db_user:GZU2uVscOUkLKioW@cluster0.6tmjabz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Banco de dados conectado com sucesso!');
    } catch (erro) {
        console.log(erro);
    }
}



export default conectarBancoDeDados;