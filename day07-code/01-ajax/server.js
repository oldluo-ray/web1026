const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/test', (req, res) => {
  setTimeout(() => {
    res.send('响应')
  }, 1000)
})
app.listen(5000)
