var express = require('express');
var router = express.Router();

var Models = require('../models');

router.post('/', function(req, res, next){
  // Lisää tämä käyttäjä (Vinkki: create), muista kuitenkin sitä ennen varmistaa, että käyttäjänimi ei ole jo käytössä! (Vinkki: findOne)
  var userToAdd = req.body;
});

router.post('/authenticate', function(req, res, next){
  // Tarkista käyttäjän kirjautuminen tässä. Tee se katsomalla, löytyykö käyttäjää annetulla käyttäjätunnuksella ja salasanalla (Vinkki: findOne ja sopiva where)
  var userToCheck = req.body;
});

router.get('/logged-in', function(req, res, next){
  var loggedInId = req.session.userId;

  if(loggedInId == null){
    res.json({});
  }else{
    // Hae käyttäjä loggedInId-muuttujan id:llä (Vinkki: findOne)
  }
});

module.exports = router;
