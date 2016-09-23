'use strict'
import test from 'ava';
const fs = require('fs');
const em = require('./index.js');
test.serial('extends1', (t) => {
  let obj = {};
  em.extends(obj, fs);
  t.true(obj.accessSync('./package.json') === undefined);
});
test.serial('extends2', (t) => {
  let obj = { 'accessSync': 1 };
  em.extends(obj, fs);
  t.true(obj.accessSync == 1);
  t.true(obj.parent.accessSync('./package.json') === undefined);
});
test.serial('extends3', (t) => {
  let obj = { 'accessSync': 1, 'readFile': 2 };
  em.extends(obj, fs);
  t.true(obj.accessSync == 1);
  t.true(obj.readFile == 2);
  t.true(obj.parent.accessSync('./package.json') === undefined);
  t.true(typeof (obj.parent.readFile) == 'function');
});
test.serial('extends4', (t) => {
  let obj = { 'accessSync': 1, 'readFile': 2 };
  em.extends(obj, "fs", fs);
  t.true(obj.accessSync == 1);
  t.true(obj.readFile == 2);
  t.true(obj.fs.accessSync('./package.json') === undefined);
  t.true(typeof (obj.fs.readFile) == 'function');
});
test.serial('extends5', (t) => {
  let obj = {};
  try {
    em.extends(obj, 1, fs);
  } catch (error) {
     t.pass();
  }
});
// const em2 = require('./lib/extends.js');
// test.serial('extends1', (t) => {
//      let obj={};
//      em2(obj,"fs",fs);
//      console.log(obj);
//      //t.true(obj.accessSync('./package.json')=== undefined);
// });