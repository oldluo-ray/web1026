// 自定义hook
// 注意: 自定义hook,其实就是自定义函数. 但是函数名一般都是以useXXX开头
import { useState, useEffect } from 'react'
export default function usePosition() {
  // 定义x和y,记录鼠标的坐标
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // 在组件挂载的时候,注册mousemove事件,卸载的时候,清除事件
  useEffect(() => {
    window.addEventListener('mousemove', handle)
    return () => {
      window.removeEventListener('mousemove', handle)
    }
  }, [])

  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
