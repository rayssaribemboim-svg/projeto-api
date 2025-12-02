import mongoose from "mongoose";
import{} from 'dotenv/config';

async function conectarBancoDeDados() {
    try {
        console.log('Conectando ao banco de dados...');
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Banco de dados conectado com sucesso!');
    } catch (erro) {
        console.log(erro);
    }
}



export default conectarBancoDeDados;