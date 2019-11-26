const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const historyRoutes = require("./routes/history.routes");
const favoriteRoutes = require("./routes/favorite.routes");
const key = require("./keys");
const app = express();

let urlMongo = `mongodb+srv://damir:1q2w3e4r@cluster0-ghiss.mongodb.net/images`;

mongoose
  .connect(key.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected...."))
  .catch(error => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(historyRoutes);
app.use(favoriteRoutes);

module.exports = app;
