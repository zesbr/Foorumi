var Sequelize = require('sequelize');

/*
var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});
*/

var sequelize = new Sequelize('postgres://zrwsnhaascnwio:12qsIuu3ayLvRN6d8L6_afVepz@ec2-54-204-3-200.compute-1.amazonaws.com:5432/d82lcg0akajalh', {
  dialect: 'postgres',
  storage: 'postgres'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
