const express = require("express");
const mongoose = require("mongoose");
const historyRoutes = require("./routes/history.routes");
const favoriteRoutes = require("./routes/favorite.routes");
const app = express();

let urlMongo = `mongodb+srv://damir:1q2w3e4r@cluster0-ghiss.mongodb.net/images`;

mongoose
  .connect("mongodb+srv://damir:1q2w3e4r@cluster0-ghiss.mongodb.net/images", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected...."))
  .catch(error => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(historyRoutes);
app.use(favoriteRoutes);

module.exports = app;
