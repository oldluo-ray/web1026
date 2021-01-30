import React from 'react'

// export default function Demo(props) {
//   return <div>demo函数组件</div>
// }

const Demo = React.forwardRef((props, ref) => {
  return <div ref={ref}>demo函数组件</div>
})

export default Demo
