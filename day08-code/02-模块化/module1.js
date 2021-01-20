// 别人的代码
;(function (w, $) {
  let username = 'zs' //私有数据
  function getData() {
    console.log('module1---', username)
  }

  function setData(data) {
    if (typeof data !== 'string') return
    username = data
    console.log('module1---setData')
  }

  let module1 = {
    setData,
    getData,
  }

  w.module1 = module1
})(window, $)
