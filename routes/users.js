var express = require('express');
var router = express.Router();
var request = require('request');
//Get vmbox
// var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://sandbox.2600hz.com:8443/v2/accounts/4642e64040cdb8b89c310a21a07c7f62/vmboxes/',
//   'headers': {
//     'Authorization': 'Basic NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY='
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://sandbox.2600hz.com:8443/v2/accounts/4642e64040cdb8b89c310a21a07c7f62/vmboxes/b37675a2d7b90d60f0ee5d4175502394/messages?paginate=true',
  'headers': {
    'Authorization': 'Basic NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY='
  }
};
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  let json = JSON.parse(response.body)
  //console.log(json.data);

  res.json(
    json
  );
});

});

//Update message folder
router.post('/', function(req, res, next){
  var folder= req.body.data.folder;
  var messages= req.body.data.messages;
  console.log("aaaaaaaaaaaaaa");
  console.log(req);
  var options = {
  'method': 'POST',
  'url': 'https://sandbox.2600hz.com:8443/v2/accounts/4642e64040cdb8b89c310a21a07c7f62/vmboxes/b37675a2d7b90d60f0ee5d4175502394/messages',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY='
  },
  body: JSON.stringify({"data":{folder ,messages}})
  };
  console.log(JSON.stringify({"data":{folder ,messages}}));
  request(options, function (error, response) {
    if (error) throw new Error(error);


    res.json(
      response.body
    );
  });
});

module.exports = router;
