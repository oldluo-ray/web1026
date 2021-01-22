// 统一导出

let data1 = 'module2---data'

function foo() {
  console.log('module2---foo')
}

// 统一暴露可以写多次,但是没有必要
export { data1 }
export { foo }
export let data4 = 4
