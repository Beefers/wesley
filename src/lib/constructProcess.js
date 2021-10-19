export default async function(flavour) {
    const flavours = ['stable', 'ptb', 'canary', 'development'];

    const constructProcess = ['Discord'];

    if (!flavours.includes(flavour)) {
        console.error('Invalid Discord flavour specified.');
        process.exit();
    } 

    if(flavour !== 'stable') constructProcess.push(flavour.charAt(0).toUpperCase() + flavour.slice(1));

    //? Windows Compatibility
    if (process.platform === 'win32') {
        constructProcess.push('.exe');
    };

    //? Darwin Compatibility
    //? Discord's renderer process on OSX can be confirmed rather easily, based on the suffixes of the process.
    //? Several processes are "Discord {flavour} Helper", but we can confirm the renderer using "Discord ${flavour} Helper (Renderer)"
    if (process.platform === 'darwin') {
        constructProcess.push('Helper');
        constructProcess.push('(Renderer)');
        return constructProcess.join(" ");
    } else {
        return constructProcess.join("");
    }
}