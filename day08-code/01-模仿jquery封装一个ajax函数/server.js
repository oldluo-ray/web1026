const express = require('express')
// const cors = require('cors')
const app = express()
// app.use(cors())
// app.use(express.urlencoded({ extended: true })) //键=值&键=值
// app.use(express.json()) // 将客户端传过来的json格式的数据,解析之后,添加到req.body上面
app.use((req, res, next) => {
  res.set('access-control-allow-origin', '*')
  next()
})
app.get('/test', (req, res) => {
  res.send(req.query)
})

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.listen(5000)
