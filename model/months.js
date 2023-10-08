const mongoose = require('mongoose');

const moneyCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  Meskerm: { type: Number },
  Tikmt: { type: Number },
  Hidar: { type: Number },
  Tahisas: { type: Number },
  Tir: { type: Number },
  Yekatit: { type: Number },
  Megabit: { type: Number },
  Miyaziya: { type: Number },
  Ginbot: { type: Number },
  Sene: { type: Number },
  Hamle: { type: Number },
  Nehase: { type: Number },
  Meskerm: { type: Number },
});

module.exports = mongoose.model('MoneyCollection', moneyCollectionSchema);
