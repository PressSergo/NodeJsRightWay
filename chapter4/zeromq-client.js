'use strict';

const zmq = require('zeromq');

const sub = zmq.socket('sub');

sub.subscribe('');

sub.on('message', data => {
    let message = JSON.parse(data);
    console.log(`File: ${message.filename} type: ${message.type} date: ${new Date(message.date)}`)
});

sub.connect('tcp://localhost:60400');