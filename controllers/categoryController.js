var Category = require('../models/category');
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
exports.insert = function(req, res) {
    let cat = new Category(req.body);
    cat.save(err=>{
      if (err) return res.status(500).send(err);
      return res.status(200).send(cat);
    });  

};
exports.update = function(req, res){
    Category.findByIdAndUpdate(req.params.id,
    {
        cat_name: req.body.cat_name,        
    },  
    function(err, response){
      if (err) {
        return res.status(500).send(err);
      } else {
          console.log(response);
          console.log('category updated!');
          return res.status(200).send({message:"Updated"});
      }
    });
}
exports.delete = function(req, res){
    Category.findByIdAndRemove(req.params.id, (err, balance) => {
      if (err) return res.status(500).send(err);
      const response = {
          message: "Successfully deleted",
      };
      return res.status(200).send(response);
    });
}