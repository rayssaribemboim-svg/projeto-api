import mongoose from 'mongoose';
const { Schema } = mongoose;

const Mulher = new Schema({
   nome: { type: String, required: true },
   profissao: { type: String, required: true }
});


export default mongoose.model('Mulher', Mulher);