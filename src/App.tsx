import React from 'react';
import './App.css';
import {UseConnectSocket} from "./hooks/useConnectSocket";


function App() {
    const {status, conferenceActive} = UseConnectSocket();

    const isApprovedStatus = status === 'approved';

    return (
        <div className="App">
            <header className="App-header">
                <h1>Client-Participant</h1>
                <h3>
                    Participant status: <span  style={isApprovedStatus ? {color: 'green'} : {color: 'red'}}>{isApprovedStatus ? ' approved' : 'not approved'}</span>
                </h3>
                <h3>Quiz launched:
                    <span
                        style={conferenceActive ? {color: 'green'} : {}}>{conferenceActive ? '  Started' : 'On waiting'}</span>
                </h3>
            </header>
        </div>
    );

}

export default App;
