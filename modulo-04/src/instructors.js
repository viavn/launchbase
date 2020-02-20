const fs = require('fs');

exports.post = function(req, res) {
  const keys = Object.keys(req.body);
  console.log(keys);

  for (key of keys) {
    if (req.body[key] == '') return res.send('Please, fill all fields!');
  }

  return res.send(req.body);
};
