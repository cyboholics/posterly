import {Server as HTTPServer} from 'http'
import {NextApiRequest, NextApiResponse} from 'next'
import {Socket as NetSocket} from 'net'
import {Server as IOServer} from 'socket.io'
import {SocketEvents} from "@/dto/SocketEvents";

interface SocketServer extends HTTPServer {
    io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
    server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
}

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
    if (res.socket.server.io) {
        console.log('Socket is already running.')
        return res.end()
    }

    console.log('Socket is initializing...')
    const io = new IOServer(res.socket.server)
    res.socket.server.io = io

    io.on(SocketEvents.CONNECT, (socket) => {
        socket.join('room1')
        socket.on(SocketEvents.UPDATE_POSTER, (data) => {
            console.log('UPDATE_POSTER', data)
            // TODO: store data in database
            io.to('room1').emit(SocketEvents.UPDATE_POSTER, data)
        })
    })

    res.end()
}