const EvenEmmiter = require('events').EventEmitter;

class LDJClient extends EvenEmmiter {
    constructor(stream){
        super();
        let buffer = ' ';
        stream.on('data',data =>{
            buffer +=data.toString();
            let boundary = buffer.indexOf('\n');
            while(boundary !==-1){
                const input = buffer.substring(0, boundary);
                buffer = buffer.substring(boundary+1);
                this.emit('message',JSON.parse(input));
                buffer = buffer.indexOf('\n');
            }
        })
    }

    static connect(stream){
        return new LDJClient(stream)
    }
}

module.exports = LDJClient;