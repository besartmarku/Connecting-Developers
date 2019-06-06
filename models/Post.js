const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
