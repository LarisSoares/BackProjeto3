const express = require("express");
const router = express.Router();
const Tarefa = require("../models/tarefa");


router.post("/add", async (req, res) => {
 
      await Tarefa.create(req.body)
      .then(() => {
          res.status(200).send("Tarefa adicionada com exito");
      }).catch((err) => {
          res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor !");
          console.error(err);
      })
 
});

router.get('/', async (req, res) => {
  await Tarefa.find({})
  .then((tarefa) => {
      res.status(200).send(tarefa);
  })
  .catch((err) => {
      res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor!");
      console.log(err);
  })
});

router.get('/findById/:id', async (req, res) => {
  await Tarefa.find({_id : req.params.id})
  .then((tarefa) => {
      res.status(200).send(tarefa);
  })
  .catch((err) => {
      res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor!");
      console.log(err);
  })
});

router.get('/findByName/:name', async (req, res) => {
  await Tarefa.find({nome : req.params.name})
  .then((tarefa) => {
      res.status(200).send(tarefa);
  })
  .catch((err) => {
      res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor!");
      console.log(err);
  })
});

router.put("/update/:id", async (req, res) => {
  await Tarefa.updateOne({_id : req.params.id},req.body)
  .then(() => {
      res.status(200).send("Atualizado com exito");
  })
  .catch((err) => {
      res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor!");
      console.log(err);
  });
});

router.delete("/delete/:id", async (req, res) => {
  await Tarefa.deleteOne({_id : req.params.id})
  .then(() => {
      res.status(200).send("Deletado com exito");
  })
  .catch((err) => {
      res.status(400).send("Algo errado com sua tarefa. Tente de novo, por favor!");
      console.log(err);
  });
});


module.exports = router;