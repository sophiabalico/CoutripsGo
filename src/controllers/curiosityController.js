import CuriosityModel from "../models/curiosityModel.js";

class CuriosityController {
  // GET /curiosidades
  async getAllCuriosities(req, res) {
    try {
      const curiosidades = await CuriosityModel.findAll();
      res.json(curiosidades);
    } catch (error) {
      console.error("Erro ao buscar as curiosidades:", error);
      res.status(500).json({ error: "Erro ao buscar as curiosidades" });
    }
  }

  // GET /curiosidades/:id
  async getCuriosityById(req, res) {
    try {
      const { id } = req.params;

      const curiosidade = await CuriosityModel.findById(id);

      if (!curiosidade) {
        return res.status(404).json({ error: "Curiosidade não encontrada!" });
      }

      res.json(curiosidade);
    } catch (error) {
      console.error("Erro ao buscar curiosidade:", error);
      res.status(500).json({ error: "Erro ao buscar curiosidade!" });
    }
  }

  // POST /curiosidades
  async createCuriosity(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const {
        title,
        description,
        countryId,
      } = req.body;

      // Verifica se todos os campos da curiosidade foram fornecidos
      if (
        !title ||
        !collectionId
      ) {
        return res.status(400).json({
          error:
            "Os campos título e id do país são obrigatórios",
        });
      }

      // Criar a nova Curiosidade
      const newCuriosity = await CuriosityModel.create(
        title,
        description,
        countryId
      );

      if (!newCuriosity) {
        return res.status(400).json({ error: "Erro ao criar curiosidade" });
      }

      res.status(201).json({
        message: "Curiosidade criada com sucesso",
        newCuriosity,
      });
    } catch (error) {
      console.error("Erro ao criar Curiosidade:", error);
      res.status(500).json({ error: "Erro ao criar Curiosidade" });
    }
  }

  // PUT /curiosidades/:id
  async updateCuriosity(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        countryId,
      } = req.body;

      // Atualizar a Curiosidade
      const updatedCuriosity = await CuriosityModel.update(
        id,
        title,
        description,
        countryId
      );

      if (!updatedCuriosity) {
        return res.status(404).json({ error: "Curiosidade não encontrada" });
      }

      res.json(updatedCuriosity);
    } catch (error) {
      console.error("Erro ao atualizar Curiosidade:", error);
      res.status(500).json({ error: "Erro ao atualizar Curiosidade!" });
    }
  }

  // DELETE /curiosidades/:id
  async deleteCuriosity(req, res) {
    try {
      const { id } = req.params;

      // Remover a Curiosidade
      const result = await CuriosityModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Curiosidade não encontrada!" });
      }

      res.status(200).json({
        message: "Curiosidade removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover Curiosidade:", error);
      res.status(500).json({ error: "Erro ao remover Curiosidade!" });
    }
  }
}

export default new CuriosityController();
