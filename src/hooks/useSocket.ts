import IO, {Socket} from 'socket.io-client'
import {useContext, useEffect, useRef, useState} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import axios from "axios";
import {SocketEvents} from "@/dto/SocketEvents";
import {parseNode, parseNodeList} from "@/nodes/types/ParseNode";
import {Node} from "@/nodes/types/Node";
export const useSocket = () => {
    const [socket, setSocket] = useState<Socket>(IO())
    const {poster, posterSize, setPoster, setPosterSize} = useContext(PosterContext)
    const posterRef = useRef<Node<any>[]>([])
    const numRenders = useRef(0)
    const onConnect = () => {
        console.log('connected')
    }
    const onDisconnect = () => {
        console.log('disconnected')
    }

    const handleUpdatesInPoster = ()=>{
        const idsInOldPoster = posterRef.current.map(node => node.id)
        const idsInNewPoster = poster.map(node => node.id)
        const newNodes = poster.filter(node => !idsInOldPoster.includes(node.id))
        const deletedNodes = posterRef.current.filter(node => !idsInNewPoster.includes(node.id))
        const updatedNodes = poster.filter(node => {
            const oldNode = posterRef.current.find(oldNode => oldNode.id === node.id)
            return oldNode && !oldNode.equals(node)
        })
        if(newNodes.length > 0 || deletedNodes.length > 0 || updatedNodes.length > 0){
            socket.emit(SocketEvents.UPDATE_POSTER, {newNodes, deletedNodes, updatedNodes, posterSize})
        }
    }

    const onPosterUpdate = (data: any) => {
        const {newNodes, deletedNodes, updatedNodes, posterSize} = data

        for (let i = 0; i < updatedNodes.length; i++) {
            const node = updatedNodes[i];
            for (let j = 0; j < poster.length; j++) {
                const oldNode = poster[j];
                if(oldNode.id === node.id){
                    poster[j] = parseNode(node) as Node<any>
                }
            }
        }

        poster.push(...(newNodes.map((node : any) => parseNode(node))))
        const newPoster = poster.filter(node => !deletedNodes.includes(node.id))

        posterRef.current = newPoster.map(node => parseNode(JSON.parse(JSON.stringify(node))) as Node<any>)
        setPoster(newPoster)
        setPosterSize(posterSize)
    }

    useEffect(() => {
        if(numRenders.current <=5) return
        handleUpdatesInPoster()
        numRenders.current = 0
        posterRef.current = poster.map(node => {
            return parseNode(JSON.parse(JSON.stringify(node))) as Node<any>
        })
    }, [numRenders.current])

    useEffect(() => {
        numRenders.current++
    }, [poster])

    useEffect(() => {
        socket.on(SocketEvents.CONNECT, onConnect)
        socket.on(SocketEvents.DISCONNECT, onDisconnect)
        socket.on(SocketEvents.UPDATE_POSTER, onPosterUpdate)
        return () => {
            socket.off(SocketEvents.CONNECT, onConnect)
            socket.off(SocketEvents.DISCONNECT, onDisconnect)
            socket.off(SocketEvents.UPDATE_POSTER, onPosterUpdate)
        }
    }, [socket])

    useEffect(() => {
        axios.get('/api/socket').catch(err => {
            console.log(err)
        })
    }, [])
}
