
import http from 'http'

import serverConfig from '~config/server'

import express from '~server/services/express'
import mongoose from '~server/services/mongoose'
import socketio from '~server/services/socketio'
import auth from '~server/services/auth'
// import repl from '~server/services/repl'

mongoose()
auth()

const app = express()
const server = http.createServer(app)
const io = socketio(server)

server.listen(serverConfig.port, serverConfig.ip, () => {
    console.log(`Server is listening on ${serverConfig.ip}:${serverConfig.port}`)

    // repl()
})

