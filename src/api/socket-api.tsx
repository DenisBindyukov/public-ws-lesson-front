import io, {Socket} from "socket.io-client";


class SocketIoApi {
    static socket: null | Socket  = null;

    static  createConnection() {
        const options = {
            extraHeaders: {
                participantId: '1',
                roomKey: 'itConferenceRoom'
            }
        }

        this.socket = io('http://localhost:5001/participant', options);

        this.socket.on("connect", () => {
            console.log("ws:connect")
        })

        this.socket.on("disconnect", (e) => {
            console.log("ws:disconnect")
        })
    }
}

export default SocketIoApi

