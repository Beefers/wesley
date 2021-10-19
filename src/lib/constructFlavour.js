export default function(flavour) {
    const flavours = ['stable', 'ptb', 'canary', 'development'];

    const constructFlavour = ['Discord'];

    if (!flavours.includes(flavour)) {
        console.error('Invalid Discord flavour specified.');
        process.exit();
    } 

    if(flavour !== 'stable') constructFlavour.push(flavour.charAt(0).toUpperCase() + flavour.slice(1));

    if (process.platform === 'win32') {
        constructFlavour.push('.exe');
    };

    if (process.platform === 'darwin') {
        constructFlavour.push('Helper');
        return constructFlavour.join(" ");
    } else {
        return constructFlavour.join("");
    }
}