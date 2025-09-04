import express from "express";
import CountryController from "../controllers/countryController.js";

const countryRouter = express.Router();

// Rotas de Países
// GET /paises - Listar todos os Países
countryRouter.get("/", CountryController.getAllCountries);

// GET /paises/:id - Obter um País pelo ID
countryRouter.get("/:id", CountryController.getCountryById);

// POST / - Criar um novo País
countryRouter.post("/", CountryController.createCountry);

// PUT /paises/:id - Atualizar um País
countryRouter.put("/:id", CountryController.updateCountry);

// DELETE /paises/:id - Remover um País
countryRouter.delete("/:id", CountryController.deleteCountry);

export default countryRouter;
