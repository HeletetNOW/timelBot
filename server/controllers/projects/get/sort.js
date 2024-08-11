const { prisma } = require("../../../prisma/prisma-client");

const sort = async (id, maybeProjectName, authorId) => {
  try {
    const where = {
      authorId,
      projectName: { contains: maybeProjectName },
    };
    if (id) {
      where.id = Number(id);
    }

    const data = await prisma.project.findMany({
      where: where,
      include: {
        subProjects: true,
        subProjects: { include: { timers: true } },
      },
    });

    return data;
  } catch (error) {
    return [];
  }
};

module.exports = sort;
