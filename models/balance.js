var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BalanceSchema = new Schema(
  {
    balance_name: {type: String, required: true},
    amount: {type: Number, required: true},
  }
);

// Virtual for book's URL
BalanceSchema
.virtual('url')
.get(function () {
  return '/balance/' + this._id;
});

//Export model
module.exports = mongoose.model('Balance', BalanceSchema);