const mongoose = require('mongoose');

const moneyCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  Tikmt: {
    type: Number
  },
  Hidar: {
    type: Number
  },
  Tahisas: {
    type: Number
  },
  Tir: {
    type: Number
  },
  Yekatit: {
    type: Number
  },
  Megabit: {
    type: Number
  },
  Miyaziya: {
    type: Number
  },
  Ginbot: {
    type: Number
  },
  Sene: {
    type: Number
  },
  Hamle: {
    type: Number
  },
  Nehase: {
    type: Number
  },
  Meskerm: {
    type: Number
  },

});

const MoneyCollection = mongoose.model('MoneyCollection', moneyCollectionSchema);

module.exports = MoneyCollection;
