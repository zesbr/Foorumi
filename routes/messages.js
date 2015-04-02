var express = require('express');
var router = express.Router();

var Models = require('../models');

router.get('/', function(req, res, next) {
    // Hae kaikki viestit tässä (Vinkki: findAll)
});

router.get('/:id', function(req, res, next) {
  // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
  var messageId = req.params.id;
});

router.post('/:id/reply', function(req, res, next){
  // Lisää tällä id:llä varustettuun viestiin...
  var messageId = req.params.id;
  // ...tämä vastaus (Vinkki: luo ensin uusi vastaus käyttämällä create-funktiota ja aseta sen aihealueeksi messageId setMessage-funktiolla)
  var replyToAdd = req.body;
});

module.exports = router;
