import find from 'find-process';

export default async function(discordProcess) {
    console.log(`Constructed process name: ${discordProcess}`);
    let foundProcesses;

    await find('name', discordProcess, true)
        .then(found => {
            //? On Windows, Discord's renderer can be determined by whether it ends with Discord{flavour}.exe"
            if (process.platform === 'win32') foundProcesses = found.filter(p => p.cmd.endsWith(`${discordProcess}\"`));

            //? Discord's renderer process on OSX can be confirmed rather easily, based on the suffixes of the process.
            //? Several processes are "Discord {flavour} Helper", but we can confirm the renderer using "Discord {flavour} Helper", then the command line arguments.
            else if (process.platform === 'darwin') foundProcesses = found.filter(p => p.cmd.startsWith(`/Applications/${discordProcess}.app/Contents/Frameworks/${discordProcess} Helper (Renderer).app/`));
        });

    process._debugProcess(foundProcesses[0].pid);
    return foundProcesses;
};