var authentication = function(req, res, next){
  if (!req.session.userId || req.session.userId == null) {
    res.status(403).json({ 
    	error: 'Sinun tulee olla kirjautunut sisään voidaksesi suorittaa tämän toimenpiteen.' 
    });
  } else {
    next();
  }
}

module.exports = authentication;
