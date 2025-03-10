const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT;

const userRoutes = require("./routes/user.routes");
const harvestRoutes = require("./routes/harvest.routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Xử lý JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/harvest", harvestRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port", port);
});
