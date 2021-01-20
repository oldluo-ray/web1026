// 自己的代码
;(function () {
  let username = 'ls'
  function getData() {
    console.log('module2---', username)
  }

  let module2 = {
    getData,
  }

  window.module2 = module2
})()
