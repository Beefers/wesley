import find from 'find-process';

export default async function(discordProcess) {
    let foundProcesses;

    await find('name', discordProcess, true)
        .then(found => { foundProcesses = found.filter(p => p.cmd.endsWith(process.platform === 'win32' ? discordProcess + '\"' : discordProcess )) });

    process._debugProcess(foundProcesses[0].pid);
    return foundProcesses;
};