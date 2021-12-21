const Sequelize = require("sequelize")

const sequelize = new Sequelize('kopp', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log('conexao com a db bem sucedida!!!')
}).catch(function(){
  console.log('erro: nao foi possivel fazer a conexão com a db')
})

module.exports = sequelize