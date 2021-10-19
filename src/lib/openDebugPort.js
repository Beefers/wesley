import find from 'find-process';

export default async function(discordProcess) {
    // let wsUrl;
    //     find('name', discordProcess), true)
    //     .then(function (found) {
    //         for(let i of found) {
    //             if(i.cmd.endsWith(`${discordProcess}\"`)) {
    //                 process._debugProcess(i.pid);
    //                 
    //             };
    //         }
    //     });
    // }
    // return wsUrl;

    let foundProcesses;

    await find('name', discordProcess, true)
        .then(found => { foundProcesses = found.filter(p => p.cmd.endsWith(`${discordProcess}\"`)) })

    return foundProcesses;
};