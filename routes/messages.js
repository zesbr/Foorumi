var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

// GET /messages
router.get('/', function(req, res, next) {
    Models.Message.findAll({
      include: {
        model: Models.User
      }
    }).then(function(messages) {
      res.json(messages);
    });
});

// GET /messages/:id
router.get('/:id', function(req, res, next) {
  var messageId = req.params.id;

  Models.Message.findOne({
  	where: { id: messageId },
  	include: { 
      model: Models.Reply,
        include: {
          model: Models.User
        }
    }
	}).then(function(message) {
		res.json(message);
	});
});

// POST /messages/:id/reply
router.post('/:id/reply', authentication, function(req, res, next){ 
  var replyToAdd = req.body;
  replyToAdd.MessageId = req.params.id;
  replyToAdd.UserId = req.session.userId;

  Models.Reply.create(replyToAdd).then(function(reply) {
  	res.json(reply);
  });
});

// DELETE /messages/:id
router.delete('/:id', function(req, res, next) {
  var messageId = req.params.id;

  Models.Message.destroy({
    where: { id: messageId }
  }).then(function() {
    res.send('Message deleted successfully!');
  });
});

// DELETE /messages/reply/:id
router.delete('/reply/:id', function(req, res, next) {
  var replyId = req.params.id;

  Models.Reply.destroy({
    where: { id: replyId }
  }).then(function(){
    res.send('Reply deleted successfully!');
  });
});

module.exports = router;
