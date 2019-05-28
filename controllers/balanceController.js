var Balance = require('../models/balance');

exports.index = function(req, res) {
    Balance.find({},'_id balance_name amount')
    .exec(function (err, balance_list) {
      if (err) { return next(err); }
      //Successful, so render
      console.log(balance_list);
      res.json(balance_list);
    });

};

exports.insert = function(req, res){
  const newBalance = new Balance(req.body);
  newBalance.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(newBalance);
  });
};

exports.delete = function(req, res){
  Balance.findByIdAndRemove(req.params.id, (err, balance) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Successfully deleted",
    };
    return res.status(200).send(response);
  });
};

exports.update = function(req, res){
  Balance.findByIdAndUpdate(req.params.id,
    {
        balance_name: req.body.balance_name,
        amount: req.body.amount,         
    },  
    function(err, response){
      if (err) {
        return res.status(500).send(err);
      } else {
          console.log(response);
          console.log('user updated!');
          return res.status(200).send({message:"Update"});
      }
    });
};
