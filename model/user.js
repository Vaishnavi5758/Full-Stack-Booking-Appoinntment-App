const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userName: Sequelize.STRING,
  phone: {
    type: Sequelize.DOUBLE,
   // allowNull: false
  },
  email: {
    type: Sequelize.STRING,
   // allowNull: false
  },
});

module.exports = Product;
