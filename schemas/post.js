// 포스트 스키마
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  writer: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

postSchema.set('timestamps', true);

module.exports = mongoose.model('Post', postSchema);
