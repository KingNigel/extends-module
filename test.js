'use strict'
import test from 'ava';
const fs = require('fs');
const em = require('./index.js');

test.serial('extends1', (t) => {
  let obj = {};
  em.append(obj, fs);
  t.true(obj.accessSync('./package.json') === undefined);
});
test.serial('extends2', (t) => {
  let obj = { 'accessSync': 1 };
  em.append(obj, fs);
  t.true(obj.accessSync == 1);
  t.true(obj.parent.accessSync('./package.json') === undefined);
});
test.serial('extends3', (t) => {
  let obj = { 'accessSync': 1, 'readFile': 2 };
  em.append(obj, fs);
  t.true(obj.accessSync == 1);
  t.true(obj.readFile == 2);
  t.true(obj.parent.accessSync('./package.json') === undefined);
  t.true(typeof (obj.parent.readFile) == 'function');
});
test.serial('extends4', (t) => {
  let obj = { 'accessSync': 1, 'readFile': 2 };
  em.append(obj, "fs", fs);
  t.true(obj.accessSync == 1);
  t.true(obj.readFile == 2);
  t.true(obj.fs.accessSync('./package.json') === undefined);
  t.true(typeof (obj.fs.readFile) == 'function');
});
test.serial('extends5', (t) => {
  em.append(exports, fs);
  t.true(module.exports.accessSync('./package.json') === undefined);
});
test.serial('extends5', (t) => {
  let obj = {};
  try {
    em.append(obj, 1, fs);
  } catch (error) {
     if(error.message=="参数异常")
     t.pass();
  }
});
test.serial('append', (t) => {
  const obj =em.extends(fs);
 t.true(obj.accessSync('./package.json') === undefined);
  t.true(typeof (obj.readFile) == 'function');
});