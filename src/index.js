const args = process.argv.slice(2);

import fetch from 'node-fetch';

import openDebugPort from './lib/openDebugPort.js';
import constructFlavour from './lib/constructFlavour.js';
import sendCommand from './lib/sendCommand.js';

const flavour = args[0];
console.log(`Chosen flavour: ${flavour}`);

(async () => {
    // console.log(await openDebugPort(constructFlavour(flavour)));

    console.log(constructFlavour(flavour))

    // await fetch(``, (req, res) => {
    //     console.log(res)
    //     let debugJSON = JSON.parse(res);

    //     wsUrl = debugJSON.websocketDebuggerUrl;
    //     console.log(wsUrl)
    // });

    // const data = await (await fetch('http://localhost:9229/json')).json();

    // console.log(data[0].webSocketDebuggerUrl);
})()