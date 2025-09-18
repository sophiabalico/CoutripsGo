import prisma from "../../prisma/prisma.js"

class TouristSpotModel {
  // Obter todas os pontos turísticos
  async findAll() {
    const turismos = await prisma.touristSpot.findMany({
      include: {
        country: true,
      },
    });
    return turismos;
  }

  // Obter um ponto turístico pelo ID
  async findById(id) {
    const turismo = await prisma.touristSpot.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        country: true,
      },
    });

    return turismo;
  }

  // Criar um novo ponto turístico
  async create(
    imageUrl,
    title,
    description,
    countryId
  ) {
    const novoTurismo = await prisma.touristSpot.create({
      data: {
        imageUrl,
        title,
        description,
        countryId: Number(countryId),
      },
    });

    return novoTurismo;
  }

  // Atualizar um ponto turístico
  async update(
    id,
    imageUrl,
    title,
    description,
    countryId
  ) {
    const turismo = await this.findById(id);

    if (!turismo) {
      return null;
    }

    // Atualize um ponto turístico existente com os novos dados
    const turismoAtualizado = await prisma.touristSpot.update({
      where: {
        id: Number(id),
      },
      data: {
        imageUrl,
        title,
        description,
        countryId: Number(countryId),
      },
    });

    return turismoAtualizado;
  }

  // Remover um ponto turístico
  async delete(id) {
    const turismo = await this.findById(id);

    if (!turismo) {
      return null;
    }

    await prisma.touristSpot.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new TouristSpotModel();
