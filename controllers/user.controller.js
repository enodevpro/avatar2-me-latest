const User = require("../models/user.model");

const addId = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Clear all users before adding a new one
    await User.deleteMany({});

    const newUser = await User.create({ userId, active: true });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error at addId controller:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(404).json({ error: "No user found" });
    }

    const currentUser = users[0];
    if (currentUser.active) {
      return res.status(200).send(currentUser.userId);
    }

    return res.status(404).json({ error: "User is not active" });
  } catch (error) {
    console.error("Error at getCurrentUser controller:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const active = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { active: true },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User activated", user: updatedUser });
  } catch (error) {
    console.error("Error at active controller:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const deActive = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { active: false },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User deactivated", user: updatedUser });
  } catch (error) {
    console.error("Error at deActive controller:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addId,
  active,
  deActive,
  getCurrentUser,
};
