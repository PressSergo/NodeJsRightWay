'use strict';

const net = require('net');
const client = net.connect({port:60300});
const ldcClient = require('./lib/ldj-client').connect(client);

ldcClient.on('message', message => {
    if(message.type === 'watch'){
        console.log(`now watching: ${message.file}`)
    } else if(message.type === 'change'){
        const date = new Date(message.timestamp);
        console.log(`File change: ${date}`)
    }else {
        console.log(`unrecord`)
    }
});