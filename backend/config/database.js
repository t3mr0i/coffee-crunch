const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect || 'mysql',
    }
  );
  

module.exports = sequelize;
