import socketio from 'socket.io'
import sockets from '~sockets'

export default (server) => {
    const io = socketio(server)

    sockets(io)

    return io
}