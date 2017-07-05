const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url)
  let filename = ''
  if (reqUrl.pathname === '/path1.html') {
    filename = 'path1.html'
  } else if (reqUrl.pathname === '/' || reqUrl.pathname === '/index.html') {
    filename = 'index.html'
  }
  if (filename) {
    fs.readFile(path.join(__dirname, filename), (err, body) => {
      if (err) {
        console.log(err)
      } else {
        res.write(body)
      }
      res.end()
    })
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(3001)
