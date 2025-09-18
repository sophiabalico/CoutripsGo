import CountryModel from "../models/countryModel.js";

class CountryController {
  // GET /países
  async getAllCountries(req, res) {
    try {
      const paises = await CountryModel.findAll();
      res.json(paises);
    } catch (error) {
      console.error("Erro ao buscar os países:", error);
      res.status(500).json({ error: "Erro ao buscar os países" });
    }
  }

  // GET /países/:id
  async getCountryById(req, res) {
    try {
      const { id } = req.params;

      const pais = await CountryModel.findById(id);

      if (!pais) {
        return res.status(404).json({ error: "País não encontrado!" });
      }

      res.json(pais);
    } catch (error) {
      console.error("Erro ao buscar país:", error);
      res.status(500).json({ error: "Erro ao buscar país!" });
    }
  }

  // POST /países
  async createCountry(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const {
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location,
      } = req.body;

      // Verifica se todos os campos do país foram fornecidos
      if (
        !name ||
        !capital ||
        !language ||
        !flag 
      ) {
        return res.status(400).json({
          error:
            "Os campos nome, capital, idioma e bandeira são obrigatórios",
        });
      }

      // Criar o novo país
      const newCountry = await CountryModel.create(
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location
      );

      if (!newCountry) {
        return res.status(400).json({ error: "Erro ao criar país" });
      }

      res.status(201).json({
        message: "País criado com sucesso",
        newCountry,
      });
    } catch (error) {
      console.error("Erro ao criar país:", error);
      res.status(500).json({ error: "Erro ao criar país" });
    }
  }

  // PUT /países/:id
  async updateCountry(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location,
      } = req.body;

      // Atualizar o país
      const updatedCountry = await CountryModel.update(
        id,
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location
      );

      if (!updatedCountry) {
        return res.status(404).json({ error: "País não encontrado" });
      }

      res.json(updatedCountry);
    } catch (error) {
      console.error("Erro ao atualizar País:", error);
      res.status(500).json({ error: "Erro ao atualizar País!" });
    }
  }

  // DELETE /países/:id
  async deleteCountry(req, res) {
    try {
      const { id } = req.params;

      // Remover o País
      const result = await CountryModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "País não encontrado!" });
      }

      res.status(200).json({
        message: "País removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover País:", error);
      res.status(500).json({ error: "Erro ao remover País!" });
    }
  }
}

export default new CountryController();
