const express = require('express')
const User = require('./models/User')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('pagina inicial kopp')
})

app.post('/cadastrar', async(req, res) => {
  await User.create(req.body)
  .then(() => {
    return res.json(User)
  }).catch(() => {
    return res.status(400).json(User)
  })
  res.send('pagina cadastrar')
})

app.post('/cadastro', async (req, res) => {
  await User.create(req.body).catch(() => {
    return res.json('error')
  })
})

app.listen(3333, () => {
  console.log('server runin at http://localhost:3333')
})