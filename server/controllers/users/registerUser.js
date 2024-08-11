const { prisma } = require("../../prisma/prisma-client");

const registerUser = async (req, res) => {
  try {
    const { userID } = req.params;

    if (await prisma.user.findUnique({ where: { id: userID } })) {
      return res
        .status(400)
        .json({ message: "Данный пользователь уже зарегестрирован" });
    }

    await prisma.user.create({
      data: {
        id: userID,
      },
    });

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Не удалось создать пользователя." });
  }
};

module.exports = registerUser;
