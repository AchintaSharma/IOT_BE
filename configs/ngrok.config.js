const ngrok = require('ngrok');
const serverConfig = require('../configs/server.config');

// let url;

const connectNgrok = async () => {
    let url = await ngrok.connect({
        proto: 'http',
        port: serverConfig.PORT || process.env.PORT,
    });
    console.log(url);
    return;
}

module.exports = {
    connectNgrok: connectNgrok,
}

