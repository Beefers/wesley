import WebSocket from 'ws';

export default function(wsUrl, expression) {
    const ws = new WebSocket(wsUrl);

    ws.on('open', function open() {
        console.log('Connected to remote debugging websocket, sending payload...');
        
        const payloadObject = {
            id: 1,
            method: "Runtime.evaluate",
            params: {
                expression: expression,
                includeCommandLineAPI: true,
                executionContextId: 2,
            }
        }

        ws.send(JSON.stringify(payloadObject));
    });

    ws.on('message', function incoming(data) {
        console.log(data.toString());
    });
}