const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/test', (req, res) => {
  const { callback } = req.query
  res.send(`${callback}({"name": "zs", "age":18})`) // res.send(fn({"name": "zs", "age":18}))
})

app.post('/test', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send('{"name":"zs", "age": 18}')
})
app.listen(5000)
