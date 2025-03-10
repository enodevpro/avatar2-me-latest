const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/avatar2-me");
    console.log("DB is connected - ", conn.connection.host);
  } catch (error) {}
};

module.exports = connectDB;
