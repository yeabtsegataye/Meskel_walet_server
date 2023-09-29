const mongoose = require('mongoose');

const moneyCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  monthlyPayments: {
    January: Number,
    February: Number,
    March: Number,
    April: Number,
    May: Number,
    June: Number,
    July: Number,
    August: Number,
    September: Number,
    October: Number,
    November: Number,
    December: Number,
  },
});

module.exports = mongoose.model('MoneyCollection', moneyCollectionSchema);
