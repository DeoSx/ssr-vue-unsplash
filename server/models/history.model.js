const { Schema, model } = require("mongoose");

const historySchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = model("histories", historySchema);
