const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Board = sequelize.define('Board', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Board;