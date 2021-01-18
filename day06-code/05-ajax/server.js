const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/test', (req, res) => {
  console.log(req.query)
})
app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('服务器响应的数据')
})
app.listen(5000)
