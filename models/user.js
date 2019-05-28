var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: {type: String, required: true},
    username: {type: Number, required: true},
    password:{type:String,required:true}
  }
);

// Virtual for book's URL
UserSchema
.virtual('url')
.get(function () {
  return '/balance/' + this._id;
});

//Export model
module.exports = mongoose.model('Balance', UserSchema);