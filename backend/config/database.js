const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize('coffee_app', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
