const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_loker', 'root', '', {
  dialect: 'mariadb',
  host: 'localhost',
});

module.exports = sequelize;