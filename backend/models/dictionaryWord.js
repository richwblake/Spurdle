const mongoose = require('mongoose');

const dictionaryWordSchema = mongoose.Schema({
  content: {
    type: String,
    require: [true, 'Cannot create word without content'],
    unique: true,
    minLength: 5,
    maxLength: 5
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('DictionaryWord', dictionaryWordSchema);