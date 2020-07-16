'use strict';

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if(!filename){
    throw Error('no filename specified \n')
}

net.createServer(
    connection => {
        console.log('subscriber connected');
        connection.write(JSON.stringify({type:'watch', file:filename})+'\n');
        const watcher = fs.watch(filename,()=> connection.write(JSON.stringify({type:'change', timestamp:Date.now()})+'\n'));
        connection.on('close', ()=>{
            console.log(`Subscriper disconnect`);
            watcher.close();
        });
    }
).listen(60300,()=> console.log(`listener for subscriper`));