import WebSocket from 'ws';

export default function(wsUrl, commandData) {
    const ws = new WebSocket(wsUrl);

    ws.send(commandData);
}