const { prisma } = require("../../prisma/prisma-client");

const createProject = async (req, res) => {
  try {
    const { projectName, description = "", userID } = req.body;

    if (!projectName) {
      return res.status(400).json({ message: "Введите название проекта." });
    }

    const project = await prisma.project.create({
      data: {
        projectName,
        description,
        sumTime: 0,
        author: {
          connect: { id: userID },
        },

        status: false,
      },
    });

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: "Не удалось создать проект." });
  }
};

module.exports = createProject;
