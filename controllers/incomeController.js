var Income = require('../models/income');
var Balance = require('../models/balance');
exports.index = function(req, res) {
    Income.find({},'_id income_name amount date')
    .exec(function (err, income_list) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(income_list);
      res.json(income_list);
    });

};
exports.insert = async function(req, res){
  const newIncome = new Income(req.body);
  newIncome.save(err => {
      if (err) return res.status(500).send(err);
  });
  
  let balance ="";
  
  Balance.find({'_id':'5c370a731ffbc62dbc669986'},'amount balance_name')
  .exec(function (err, bal) {
    if (err) { return next(err); }
    //Successful, so render
    balance = bal[0].amount;
    let name = bal[0].balance_name;
    console.log('there=>',name);
    balance = parseInt(req.body.amount)+balance;
    if(updateMainBalance(balance,name)){
      return res.status(500).send(err);
    }else{
      return res.status(200).send(newIncome);
    }
  });

};
function updateMainBalance(balance, name){
  Balance.findByIdAndUpdate('5c370a731ffbc62dbc669986',
    {
        balance_name: name,
        amount: balance,         
    },  
    function(err, response){
      if (err) {
        return false;
      } else {
          console.log(response);
          console.log('user updated!');
          return true;
      }
    });
  
}
exports.delete = function(req, res){
  Income.findByIdAndRemove(req.params.id, (err, income) => {
    if (err) return res.status(500).send(err);
    
    else{
      const response = {
      message: "Successfully deleted",
    };
      return res.status(200).send(response);
    } 
  });
};