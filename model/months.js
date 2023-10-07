const mongoose = require('mongoose');

const moneyCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
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

const MoneyCollection = mongoose.model('MoneyCollection', moneyCollectionSchema);

module.exports = MoneyCollection;
