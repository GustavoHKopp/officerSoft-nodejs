const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('users', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CPF: {
    type: Sequelize.STRING,
    allowNull:false,
    unique: true,
    primaryKey: true
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull:false
  },
  numero: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    allowNull:false
  }
})

//criar a tabela se n existir
//verifica se existe alguma diferença na tabela, realiza a alteração
// User.sync({ alter: true})

module.exports = User
