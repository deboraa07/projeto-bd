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
    organizacao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    hora:{
        type: Sequelize.TIME,
        allowNull: false
    },
    local:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    },
    geometria:{
        type: Sequelize.GEOMETRY,
        allowNull: false
    }
});

module.exports = Ponto;