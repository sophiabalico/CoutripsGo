import prisma from "../../prisma/prisma.js"

class CuriosityModel {
  // Obter todas as curiosidades
  async findAll() {
    const curiosidades = await prisma.curiosity.findMany({
      orderBy: {
        title: "asc",
      },
      include: {
        country: true,
      },
    });
    return curiosidades;
  }

  // Obter uma curiosidade pelo ID
  async findById(id) {
    const curiosidade = await prisma.curiosity.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        country: true,
      },
    });

    return curiosidade;
  }

  // Criar uma nova curiosidade
  async create(
    title,
    description,
    countryId
  ) {
    const novaCuriosidade = await prisma.curiosity.create({
      data: {
        title,
        description,
        countryId: Number(countryId),
      },
    });

    return novaCuriosidade;
  }

  // Atualizar uma curiosidade
  async update(
    id,
    title,
    description,
    countryId
  ) {
    const curiosidade = await this.findById(id);

    if (!curiosidade) {
      return null;
    }

    // Atualize a curiosidade existente com os novos dados
    const curiosidadeAtualizada = await prisma.curiosity.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        countryId: Number(countryId),
      },
    });

    return curiosidadeAtualizada;
  }

  // Remover uma curiosidade
  async delete(id) {
    const curiosidade = await this.findById(id);

    if (!curiosidade) {
      return null;
    }

    await prisma.curiosity.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CuriosityModel();
