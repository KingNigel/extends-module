'use strict'
import test from 'ava';
const fs = require('fs');
const em = require('./index.js');
test.serial('extends1', (t) => {
     let obj={};
     em.extends(obj,fs);
     t.true(obj.accessSync('./package.json')=== undefined);
});
test.serial('extends1', (t) => {
     let obj={'accessSync':1}; 
     em.extends(obj,fs);
       t.true(obj.accessSync==1);
       t.true(obj.p.accessSync('./package.json')=== undefined);
});
test.serial('extends1', (t) => {
     let obj={'accessSync':1,'readFile':2}; 
     em.extends(obj,fs);
       t.true(obj.accessSync==1);
       t.true(obj.readFile==2);
       t.true(obj.p.accessSync('./package.json')=== undefined);
       t.true(typeof(obj.p.readFile)=='function');
});