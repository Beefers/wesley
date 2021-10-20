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
    //?  OSX process names are joined with spaces.
    if (process.platform === 'darwin') {
        return constructProcess.join(" ");
    } else {
        return constructProcess.join("");
    }
}