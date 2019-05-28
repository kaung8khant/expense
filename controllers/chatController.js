const path = require('path');

exports.index = function(req, res) {
    res.sendFile(path.join(__dirname+'/../views/chat.html'));
  //__dirname : It will resolve to your project folder.


};
