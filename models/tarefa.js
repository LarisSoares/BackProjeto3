const mongoose = require("mongoose");

const tarefaModel = new mongoose.Schema({
    tarefa: { type: String, required: true },
    importancia: { type: String, required: true },
    texto: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
  })

const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;




