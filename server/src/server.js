const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./route/index")

const server = express()

server.use(morgan("dev"))
server.use(cors())
server.use(express.json())
server.use(router)


server.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));

module.exports = server