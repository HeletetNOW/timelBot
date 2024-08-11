const sort = require("./sort");

const getProjects = async (req, res) => {
  try {
    const { id, projectName, userID } = req.body;

    const data = await sort(id, projectName, userID);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Не удалось получить проекты." });
  }
};

module.exports = getProjects;
