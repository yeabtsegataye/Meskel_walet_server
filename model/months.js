const mongoose = require('mongoose');

const moneyCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  Gender :{
    type: String,
    require: true,
  },
  monthlyPayments: {
    Tikmt: Number,
    Hidar: Number,
    Tahisas: Number,
    Tir: Number,
    Yekatit: Number,
    Megabit: Number,
    Miyaziya: Number,
    Ginbot: Number,
    Sene: Number,
    Hamle: Number,
    Nehase: Number,
    Meskerm: Number,
  },
});

module.exports = mongoose.model('MoneyCollection', moneyCollectionSchema);
