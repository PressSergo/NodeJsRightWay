'use strict';

const assert = require('assert');
const sum = require('./SomeFunc.js');

describe('summ detected',()=>{
    it('should be 9',()=>{
        assert.equal(sum(4,5),9);
    })
});