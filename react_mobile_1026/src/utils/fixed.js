// 实现移动端适配的代码

function adapter() {
  const fontSize = document.documentElement.clientWidth / 10
  document.documentElement.style.fontSize = fontSize + 'px'
  // const fontSize = (document.documentElement.clientWidth * 100) / 375
  // document.documentElement.style.fontSize = fontSize + 'px'
}

adapter()
window.onresize = adapter
