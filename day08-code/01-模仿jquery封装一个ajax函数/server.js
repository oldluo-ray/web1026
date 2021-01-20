const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('content-type', 'text/html; charset=utf8')
  res.end('后台响应的数据')
})
server.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('启动成功')
})
