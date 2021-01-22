'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn1 = fn1;
exports.fn2 = fn2;
// 分别导出

function fn1() {
  console.log('module1---fn1');
}

function fn2() {
  console.log('module1---fn2');
}

var data = exports.data = [1, 2, 3];