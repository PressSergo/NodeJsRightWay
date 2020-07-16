const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename){
    throw Error('wrong filename')
}
fs.watch(filename,()=>{
    const ls = spawn('ls',['-l','-h',filename]);
    let output = '';
    ls.stdout.on('data',chunk => output+=chunk);
    ls.on('close',()=>{
        const pars = output.split('/ls+/');
        console.log([pars[0],pars[4],pars[8]])
    })
});
console.log('Now watching ${filename} for changes...');