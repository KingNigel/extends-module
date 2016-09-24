# extends-module

[![Build Status](https://travis-ci.org/KingNigel/extends-module.svg?branch=master)](https://travis-ci.org/KingNigel/extends-module)
[![Coverage Status](https://coveralls.io/repos/github/KingNigel/extends-module/badge.svg?branch=master)](https://coveralls.io/github/KingNigel/extends-module?branch=master)

一个简单的辅助模块间继承的包。
## 初衷
当我想要使用自己写的一个模块进行文件操作，同时又要使用fs模块的时候，我需要引入fs模块和我自己写的模块，
这使我感觉很不爽，因为我希望一次性引入我的模块里面带上了fs模块的方法，或者让fs模块里面有我写的方法，
特别是我喜欢fs这个名称。
```js
//不爽
var fs = require('fs');
var fs-cola = require('fs-cola');
fs.accessSync('./package.json');
fs-cola.copy();
```
```js
//爽
var fs= require('fs-cola');
fs.accessSync('./package.json');
fs.copy();
```
## API
### 引入
```js
var em= require('extends-module');
```
### extends
em.extends(children[,parentName],parent)
- children类型为object,用来接收parent里面的属性和方法的
- parentName类型为string,默认为'parent',用于当children对象中有与parent相同的属性，
  给children添加parentName值的属性。
- parent类型为object
```js
var fs= require('fs');
var em= require('extends-module');
 em.extends(exports,fs);
```
