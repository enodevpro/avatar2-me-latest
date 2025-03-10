const mongoose = require("mongoose");

const harvestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Harvest = mongoose.model("Harvest", harvestSchema);

module.exports = Harvest;
