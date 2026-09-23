const sequelize = require('../config/database');
const Board = require('./boardModel');
const List = require('./listModel');
const Task = require('./taskModel');

// Board -> List ilişkisi
Board.hasMany(List, { foreignKey: 'boardId', onDelete: 'CASCADE' });
List.belongsTo(Board, { foreignKey: 'boardId' });

// List -> Task ilişkisi
List.hasMany(Task, { foreignKey: 'listId', onDelete: 'CASCADE' });
Task.belongsTo(List, { foreignKey: 'listId' });

module.exports = { sequelize, Board, List, Task };