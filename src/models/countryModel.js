import prisma from "../../prisma/prisma.js"

class CountryModel {
  // Obter todos os países
  async findAll() {
    const paises = await prisma.country.findMany({
      include: {
        curiosities: true,
        tourists: true
      },
    });

    // console.log(paises);

    return paises;
  }

  // Obter um país pelo ID
  async findById(id) {
    const pais = await prisma.country.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        curiosities: true,
        tourists: true,
      },
    });

    return pais;
  }

  // Criar um novo país
  async create(name, imageUrl, capital, language, coin, cost, flag, location) {
    const novoPais = await prisma.country.create({
      data: {
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location,
      },
    });

    return novoPais;
  }

  // Atualizar um país
  async update(id, name, imageUrl, capital, language, coin, cost, flag, location) {
    const pais = await this.findById(id);

    if (!pais) {
      return null;
    }

    // Atualize o país existente com os novos dados
    if (name !== undefined) {
      name = name;
    }
    if (imageUrl !== undefined) {
      imageUrl = imageUrl;
    }
    if (capital !== undefined) {
      capital = capital;
    }
    if (language !== undefined) {
      language = language;
    }
    if (coin !== undefined) {
      coin = coin;
    }
    if (cost !== undefined) {
      cost = cost;
    }
    if (flag !== undefined) {
      flag = flag;
    }
    if (location !== undefined) {
      location = location;
    }

    const paisAtualizado = await prisma.country.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        imageUrl,
        capital,
        language,
        coin,
        cost,
        flag,
        location,
      },
    });

    return paisAtualizado;
  }

  // Remover um país
  async delete(id) {
    const pais = await this.findById(id);

    if (!pais) {
      return null;
    }

    await prisma.country.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CountryModel();
