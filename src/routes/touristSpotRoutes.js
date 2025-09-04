import express from "express";
import TouristSpotController from "../controllers/touristSpotController.js";

const touristRouter = express.Router();

// Rotas de pontos turísticos
// GET /turismos - Listar todas os pontos turísticos
touristRouter.get("/", TouristSpotController.getAllTouristSpots);

// GET /turismos/:id - Obter um ponto turístico pelo ID
touristRouter.get("/:id", TouristSpotController.getTouristSpotById);

// POST /turismos - Criar um novo ponto turístico
touristRouter.post("/", TouristSpotController.createTouristSpot);

// PUT /turismos/:id - Atualizar uma ponto turístico
touristRouter.put("/:id", TouristSpotController.updateTouristSpot);

// DELETE /turismos/:id - Remover um ponto turístico
touristRouter.delete("/:id", TouristSpotController.deleteTouristSpot);

export default touristRouter;
