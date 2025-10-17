const mongoose = require('mongoose');
const { Schema } = mongoose;

const mulherSchema = new Schema({
   nome: { type: String, required: true },
   profissao: { type: String, required: true }
});

module.exports = mongoose.model('Mulher', mulherSchema);



