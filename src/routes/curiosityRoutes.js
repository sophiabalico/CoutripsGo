import express from "express";
import CuriosityController from "../controllers/curiosityController.js";

const curiosityRouter = express.Router();

// Rotas de Curiosidades
// GET /curiosidades - Listar todas as Curiosidades
curiosityRouter.get("/", CuriosityController.getAllCuriosities);

// GET /curiosidades/:id - Obter uma Curiosidade pelo ID
curiosityRouter.get("/:id", CuriosityController.getCuriosityById);

// POST /curiosidades - Criar uma nova Curiosidade
curiosityRouter.post("/", CuriosityController.createCuriosity);

// PUT /curiosidades/:id - Atualizar uma Curiosidade
curiosityRouter.put("/:id", CuriosityController.updateCuriosity);

// DELETE /curiosidades/:id - Remover uma Curiosidade
curiosityRouter.delete("/:id", CuriosityController.deleteCuriosity);

export default curiosityRouter;
