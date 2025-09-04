import TouristSpotModel from "../models/touristSpotModel.js";

class TouristSpotController {
  // GET /turismo
  async getAllTouristSpots(req, res) {
    try {
      const touristSpots = await TouristSpotModel.findAll();
      res.json(touristSpots);
    } catch (error) {
      console.error("Erro ao buscar os pontos turísticos:", error);
      res.status(500).json({ error: "Erro ao buscar os pontos turísticos" });
    }
  }

  // GET /turismo/:id
  async getTouristSpotById(req, res) {
    try {
      const { id } = req.params;

      const touristSpot = await TouristSpotModel.findById(id);

      if (!touristSpot) {
        return res.status(404).json({ error: "Ponto turístico não encontrado!" });
      }

      res.json(touristSpot);
    } catch (error) {
      console.error("Erro ao buscar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao buscar ponto turístico!" });
    }
  }

  // POST /turismo
  async createTouristSpot(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const {
        imageUrl,
        title,
        description,
        countryId,
      } = req.body;

      // Verifica se todos os campos dos pontos turísticos foram fornecidos
      if (
        !imageUrl ||
        !title ||
        !countryId
      ) {
        return res.status(400).json({
          error:
            "Os campos imagem, título e id do país são obrigatórios",
        });
      }

      // Criar o novo Ponto Turístico
      const newTouristSpot = await TouristSpotModel.create(
        imageUrl,
        title,
        description,
        countryId
      );

      if (!newTouristSpot) {
        return res.status(400).json({ error: "Erro ao criar ponto turístico" });
      }

      res.status(201).json({
        message: "Ponto turístico criado com sucesso",
        newTouristSpot,
      });
    } catch (error) {
      console.error("Erro ao criar Ponto Turístico:", error);
      res.status(500).json({ error: "Erro ao criar Ponto Turístico" });
    }
  }

  // PUT /turismo/:id
  async updateTouristSpot(req, res) {
    try {
      const { id } = req.params;
      const {
        imageUrl,
        title,
        description,
        countryId,
      } = req.body;

      // Atualizar o Ponto Turístico
      const updatedTouristSpot = await TouristSpotModel.update(
        id,
        imageUrl,
        title,
        description,
        countryId
      );

      if (!updatedTouristSpot) {
        return res.status(404).json({ error: "Ponto turístico não encontrado" });
      }

      res.json(updatedTouristSpot);
    } catch (error) {
      console.error("Erro ao atualizar Ponto Turístico:", error);
      res.status(500).json({ error: "Erro ao atualizar Ponto Turístico!" });
    }
  }

  // DELETE /turismo/:id
  async deleteTouristSpot(req, res) {
    try {
      const { id } = req.params;

      // Remover o Ponto Turístico
      const result = await TouristSpotModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Ponto turístico não encontrado!" });
      }

      res.status(200).json({
        message: "Ponto turístico removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover Ponto Turístico:", error);
      res.status(500).json({ error: "Erro ao remover Ponto Turístico!" });
    }
  }
}

export default new TouristSpotController();
