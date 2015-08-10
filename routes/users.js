var express = require('express');
var router = express.Router();

var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /users

// GET /users
router.get('/', function(req, res, next) {
  Models.User.findAll().then(function(users) {
    res.json(users);
  });
});

// POST /users
router.post('/', function(req, res, next){
  var userToAdd = req.body;

  Models.User.findOne({
    where: { username: userToAdd.username }
  }). then(function(user) {
    if (user) {
      res.status(403).json({ error: 'Käyttäjänimi on jo käytössä!' });
    } else {
      Models.User.create(userToAdd).then(function(user) {
        res.json(user);
      });
    }
  });
});

// POST /users/authenticate
router.post('/authenticate', function(req, res, next){
  var userToCheck = req.body;

  if(userToCheck == null || userToCheck.username == null || userToCheck.password == null) {
    res.status(403).json({ error: 'Anna käyttäjänimi ja salsana.' });
  }

  Models.User.findOne({
    where: {
      username: userToCheck.username,
      password: userToCheck.password
    }
  }).then(function(user) {
    if (user) {
      req.session.userId = user.id
      res.json(user);
    } else {
      res.status(403).json({ error: 'Käyttäjänimi tai salasana meni väärin.'});
    }
  });
});

// GET /users/logged-in
router.get('/logged-in', function(req, res, next){
  var loggedInId = req.session.userId ? req.session.userId : null;

  if(loggedInId == null){
    res.json({});
  } else{
    Models.User.findOne(loggedInId).then(function(user){
      res.json(user);
    });
  }
});

// GET /users/logout
router.get('/logout', function(req, res, next){
  req.session.userId = null;
  res.send(200);
});

// DELETE /users/:id/delete
router.delete('/:id/delete', function(req, res, next) {
  var userId = req.params.id;

  Models.User.destroy({
    where: { id: userId }
  }).then(function() {
    res.send("User deleted successfully!");
  });
});

module.exports = router;
