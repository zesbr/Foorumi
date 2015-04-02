var express = require('express');
var router = express.Router();

var Models = require('../models');

router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
});

router.get('/:id', function(req, res, next) {
  // Hae aihealue ja siihen liittyvät viestit tällä id:llä tässä (Vinkki: findOne ja siinä sopiva include)
  var topicId = req.params.id;
});

router.post('/', function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
});

router.post('/:id/message', function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
  var topicId = req.params.id;
  // ...tämä viesti (Vinkki: luo ensin uusi viesti käyttämällä create-funktiota ja aseta sen aihealueeksi topicId setTopic-funktiolla)
  var messageToAdd = req.body;
});

module.exports = router;
