var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IncomeSchema = new Schema(
  {
    income_name: {type: String, required: true},
    amount: {type: Number, required: true},
    date:{type:Date}
  }
);

// Virtual for book's URL
IncomeSchema
.virtual('url')
.get(function () {
  return '/income/' + this._id;
});

//Export model
module.exports = mongoose.model('Income', IncomeSchema);