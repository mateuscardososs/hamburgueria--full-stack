const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Double Bacon",
    preco: 32.0,
    descricao: "Hambúrguer com bacon duplo e queijo.",
  },
  {
    id: 2,
    nome: "Smash Duplo",
    preco: 35.0,
    descricao: "Hambúrguer smash com carne suculenta.",
  },
  {
    id: 3,
    nome: "Cheddar Duplo",
    preco: 33.0,
    descricao: "Hambúrguer com cheddar duplo e molho especial.",
  },
  {
    id: 4,
    nome: "Clone Burguer",
    preco: 30.0,
    descricao: "Hambúrguer clone com sabor único.",
  },
];

// Rotas da API
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.post("/pedido", (req, res) => {
  const pedido = req.body;
  console.log("Novo Pedido:", pedido);
  res.status(201).send("Pedido recebido com sucesso!");
});

app.use(express.static(path.join(__dirname)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
