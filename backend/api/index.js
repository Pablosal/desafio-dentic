const express = require("express");
const mongoose = require("mongoose");
const Producto = require("./models/Producto");
const ProductosRoute = require("../api/routes/products.routes");
const cors = require("cors");
const path = require("path");
require("dotenv").config;
const app = express();
mongoose.connect(
  "mongodb+srv://root:root@cluster0.gd8ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("open", (_) => {
  console.log("Base de datos conectada");
});
app.use(cors());
app.use("/api/", ProductosRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 9000);
