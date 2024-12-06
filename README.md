# 🍔 Hamburgueria Full Stack

Bem-vindo ao **Hamburgueria Full Stack**, um projeto completo para gerenciamento de pedidos em uma hamburgueria. O sistema permite aos usuários visualizar o cardápio, adicionar itens ao carrinho, ajustar quantidades, escolher o método de pagamento e finalizar pedidos, integrando frontend e backend.

---

## 🚀 Funcionalidades

### **Frontend**
- Visualização de um cardápio dinâmico com imagens e preços.
- Adição de itens ao carrinho com contador exibindo o total de itens.
- Modal de carrinho para ajustes de quantidade e revisão de pedidos.
- Seleção de método de pagamento (Débito, Crédito ou Dinheiro).
- Aviso visual: "Pedido Adicionado!" ao incluir itens no carrinho.

### **Backend**
- **API RESTful**:
  - Endpoint para listar produtos (`GET /produtos`).
  - Endpoint para registrar pedidos (`POST /pedido`).
- Registro de pedidos com detalhes no terminal do servidor.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Vercel** (Hospedagem do frontend).

### **Backend**
- **Node.js**
- **Express.js**
- **Render** (Hospedagem do backend).



## 📂 Estrutura do Projeto


HAMBURGUER/
├── index.html       # Arquivo principal do frontend
├── script.js        # Lógica do frontend
├── style.css        # Estilo da aplicação
├── server.js        # Servidor Node.js com Express
├── package.json     # Dependências do backend
├── package-lock.json
├── img/             # Imagens usadas no projeto
└── node_modules/    # Dependências instaladas pelo npm




## 🔧 Instalação Local

### **Pré-requisitos**
- **Node.js** instalado na máquina.
- Gerenciador de pacotes `npm`.

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/hamburgueria--full-stack.git
   cd hamburgueria--full-stack
   ```

2. Instale as dependências do backend:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```

4. Acesse o aplicativo no navegador:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deploy

### **Frontend**
### **Backend**
- Hospedado na **Render**: [Acesse Aqui](https://hamburgueria-full-stack.onrender.com/)

---

## 📋 Endpoints da API

### **GET** `/produtos`
Retorna a lista de produtos disponíveis no cardápio.

#### **Exemplo de Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Double Bacon",
    "preco": 32.0,
    "descricao": "Hambúrguer com bacon duplo e queijo."
  },
  {
    "id": 2,
    "nome": "Smash Duplo",
    "preco": 35.0,
    "descricao": "Hambúrguer smash com carne suculenta."
  }
]
```

### **POST** `/pedido`
Registra um novo pedido no sistema.

#### **Exemplo de Requisição:**
```json
{
  "itens": [
    {
      "nome": "Double Bacon",
      "quantidade": 2,
      "preco": 32.0
    },
    {
      "nome": "Cheddar Duplo",
      "quantidade": 1,
      "preco": 33.0
    }
  ],
  "total": "97.00",
  "metodoPagamento": "Crédito"
}
```

#### **Exemplo de Resposta:**
```text
Pedido recebido com sucesso!
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos:

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adicionada minha funcionalidade"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-funcionalidade
   ```
5. Abra um **Pull Request** no GitHub.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

## ✨ Desenvolvedor

**Mateus Cardoso** 🚀
```

### **Como Usar**
1. Salve este conteúdo em um arquivo chamado `README.md` na raiz do seu projeto.
2. Faça o commit e o push para o repositório no GitHub:
   ```bash
   git add README.md
   git commit -m "Adicionado README ao projeto"
   git push origin main
   ```

Agora, seu projeto terá um `README.md` bem formatado e descritivo no GitHub. 🚀 Se precisar de mais ajustes, é só avisar! 😊
