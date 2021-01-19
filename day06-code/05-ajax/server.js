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

app.post('/checkname', (req, res) => {
  const { username } = req.body
  // 检查username是否占用
  let arr = ['zs', '沛华', '海静', '刘杰']
  let flag = true
  arr.forEach((item) => {
    if (username === item) {
      flag = false
      res.send('no')
    }
  })
  if (flag) {
    res.send('ok')
  }
})
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
