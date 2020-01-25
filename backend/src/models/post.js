const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
},
{
  toJSON: {
      virtuals: true
  }
})

PostSchema.virtual('thumbnail_url').get(function() {
  return `http://127.0.0.1:3000/files/${this.key}`
})

module.exports = mongoose.model("Post", PostSchema);
