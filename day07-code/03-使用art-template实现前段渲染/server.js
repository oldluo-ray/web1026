const express = require('express')
const app = express()
let arr = [
  {
    name: '张飞',
    gender: '男',
    info: '粗中有细',
  },
  {
    name: '关羽',
    gender: '男',
    info: '讲义气',
  },
  {
    name: '刘备',
    gender: '男',
    info: '编草鞋创业起家',
  },
  {
    name: '貂蝉',
    gender: '女',
    info: '喜欢吕布',
  },
  {
    name: '项羽',
    gender: '女',
    info: '辅助/坦克',
  },
]

app.get('/getUsers', (req, res) => {
  // 先获取函数名
  const { callback } = req.query
  // 手动把arr数组,转成json格式的字符串,然后再响应
  const jsonstr = JSON.stringify(arr)
  res.send(`${callback}(${jsonstr})`)
})

app.listen(5000, (err) => {
  if (err) console.log('启动失败', err)
  else console.log('启动成功')
})
