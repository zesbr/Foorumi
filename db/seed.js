var Sequelize = require('sequelize');

var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

var User = sequelize.define('User', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

var Topic = sequelize.define('Topic', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: Sequelize.STRING,
  description: Sequelize.TEXT
});

var Message = sequelize.define('Message', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

var Reply = sequelize.define('Reply', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  content: Sequelize.TEXT
});

Message.hasMany(Reply);
Topic.hasMany(Message);
User.hasMany(Message);
User.hasMany(Reply);
Message.belongsTo(User);
Message.belongsTo(Topic);
Reply.belongsTo(Message);
Reply.belongsTo(User);

sequelize.sync();
