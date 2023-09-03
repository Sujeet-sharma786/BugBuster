const mongoose = require("mongoose");
const DoubtandSolutionSchema = new mongoose.Schema({
  doubt: { type: String, required: true },
  solution: { type: String, default: "not answerd yet" },
  handRaise: { type: Number, default: 0 },
});

const DoubtModel = mongoose.model("bugsandsolution", DoubtandSolutionSchema);
module.exports = DoubtModel;