import { PrismaClient } from '../generated/prisma/client.js'
const prisma = new PrismaClient();

class TouristSpotModel {
  // Obter todas os pontos turísticos
  async findAll() {
    const turismos = await prisma.touristSpot.findMany({
      orderBy: {
        title: "asc",
      },
      include: {
        country: true,
      },
    });
    return turismos;
  }

  // Obter um ponto turístico pelo ID
  async findById(id) {
    const turismo = await prisma.tourist.findUnique({
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
    const novoTurismo = await prisma.tourist.create({
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
    const turismoAtualizado = await prisma.tourist.update({
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

    await prisma.tourist.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new TouristSpotModel();
