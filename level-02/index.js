const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, body) => {
    if (err) {
      console.log(err)
    } else {
      res.write(body)
    }
    res.end()
  })
})
server.listen(3001)
