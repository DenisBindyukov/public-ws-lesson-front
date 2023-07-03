import SocketIoApi from "../api/socket-api";
import {useEffect, useState} from "react";

enum PublicEvent {
    AUTH = 'auth',
    CONFERENCE_PUBLIC = 'conference-public'
}

export const UseConnectSocket = () => {
    const [status, setStatus] = useState('');
    const [conferenceActive, setConferenceActive] = useState(false);
    //const id = useSelector

    const connectSocket = () => {
        SocketIoApi.createConnection();

        SocketIoApi.socket?.on(PublicEvent.AUTH, (data: { status: string }
        ) => {
            console.log('AUTH data: ', data);
            setStatus(data.status);
        });

        SocketIoApi.socket?.on(PublicEvent.CONFERENCE_PUBLIC, (data: any
        ) => {
            console.log('CONFERENCE_PUBLIC data: ', data);
            setConferenceActive(data.payload.status);
        });
    }

    useEffect(() => {
        connectSocket();
    }, []);

    return {status, conferenceActive};
};
