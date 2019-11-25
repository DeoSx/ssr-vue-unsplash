const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema({
  photo: {
    type: Object,
    required: true
  }
});

module.exports = model("favorites", favoriteSchema);
