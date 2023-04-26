require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRE_DATABASE, process.env.POSTGRE_USER, process.env.POSTGRE_PASSWORD, {
  host: process.env.POSTGRE_HOST,
  dialect: 'postgres'
});

module.exports = sequelize;