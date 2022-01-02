import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';


const SocketContext = React.createContext();

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState();
    const PORT = process.env.PORT || 80;
    console.log('SocketProvider', PORT);
    useEffect(() => {
        const newSocket = io(
            `http://localhost:${PORT}`,
            { query: { id } }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id, PORT])


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
