const sequelize = require('sequelize');
const connection = require('./database');


const pergunta = connection.define('pergunta',{
    titulo:{
        type: sequelize.STRING,
        AllowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        AllowNull: false
    }
})


pergunta.sync({force: false}).then(() =>{})

module.exports = pergunta;