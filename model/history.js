const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  action: {
    type: String,
    enum: ["borrowed", "returned"],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const History = mongoose.model("History", historySchema);
module.exports = History