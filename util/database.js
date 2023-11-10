const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Suyogniwas57@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
