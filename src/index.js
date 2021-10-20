const args = process.argv.slice(2);

import fetch from 'node-fetch';

import openDebugPort from './lib/openDebugPort.js';
import constructProcess from './lib/constructProcess.js';
import sendCommand from './lib/sendCommand.js';

const flavour = args[0];
console.log(`Chosen flavour: ${flavour}`);

(async () => {
    // console.log(await constructProcess(flavour))
    console.log(await openDebugPort((await constructProcess(flavour))));

    const data = await (await fetch('http://localhost:9229/json/list')).json();

    sendCommand(data[0].webSocketDebuggerUrl, "require('electron').webContents.getAllWebContents()[0].executeJavaScript(`alert('bruh')`)");
})()