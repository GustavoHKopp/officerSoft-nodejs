const express = require('express')
const User = require('./models/User')

const app = express()
app.use(express.json())

app.get('/user/:cpf', async (req, res) => {
  const { CPF } = req.params
 await User.findOne({ where: { cpf: CPF } }).
  then((user) => {
    return res.json(user)
  }).catch((e) => res.json(e))
})

app.post('/user/new-user', async(req, res) => {
  const { nome,  CPF, endereco, numero, bairro, complemento, municipio, UF, RG} = req.body
  const user = await User.create({
      nome: nome,
      CPF: CPF,
      endereco: endereco,
      numero: numero,
      bairro: bairro,
      complemento: complemento,
      municipio: municipio,
      UF: UF,
      RG: RG
    },
    {
      fields: ['nome',  'CPF', 'endereco', 'numero', 'bairro', 'complemento', 'municipio', 'UF', 'RG']
    }
    )
    .then(() => {
      return res.json(user)
    })
    .catch((err) =>{
      return res.status(400).json(err)
    })
})

app.listen(3333, () => {
  console.log('server runin at http://localhost:3333')
})