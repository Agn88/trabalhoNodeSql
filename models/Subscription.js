const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('../models/User');
const Course = require('../models/Course');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cancelledAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  }
});

Subscription.belongsTo(User);
Subscription.belongsTo(Course);

module.exports = Subscription;
