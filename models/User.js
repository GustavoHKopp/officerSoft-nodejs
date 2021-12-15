const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('User', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  CPF: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull:false
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull:false
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull:false
  },
  municipio: {
    type: Sequelize.STRING,
    allowNull:false
  },
  UF: {
    type: Sequelize.STRING,
    allowNull:false
  },
  RG: {
    type: Sequelize.INTEGER,
    allowNull:false
  }

})

//criar a tabela se n existir
//verifica se existe alguma diferença na tabela, realiza a alteração
// User.sync({ alter: true})

module.exports = User
