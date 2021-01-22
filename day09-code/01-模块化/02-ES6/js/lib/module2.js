'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一导出

var data1 = 'module2---data';

function foo() {
  console.log('module2---foo');
}

// 统一暴露可以写多次,但是没有必要
exports.data1 = data1;
exports.foo = foo;
var data4 = exports.data4 = 4;