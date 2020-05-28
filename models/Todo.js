const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todos", TodoSchema);
