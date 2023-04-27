const Sequelize = require('sequelize');
const database = require('../database/database.js');

const Ponto = database.define('ponto',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    local:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lat:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    lng:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Ponto;