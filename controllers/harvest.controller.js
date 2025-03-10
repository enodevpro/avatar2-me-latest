const Harvest = require("../models/harvest.model");
const addId = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(401).json("401");
    }
    await new Harvest({
      userId: userId,
    }).save();
    res.status(201).json("success");
  } catch (error) {
    console.log(error);
  }
};

const getId = async (req, res) => {
  try {
    const { id } = req.params;

    const harvest = await Harvest.exists({ userId: id });
    if (!harvest) {
      return res.status(404).json("404");
    }
    await Harvest.findOneAndDelete({ userId: id });
    res.status(200).json("200");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getId, addId };
