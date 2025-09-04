import express from "express";
import { config } from "dotenv";
import cors from "cors"; // Importa o middleware CORS

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 5000;

// Inicializa o Express
const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

app.use(express.json()); // Parse de JSON

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "API de Países funcionando! 🌍" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
