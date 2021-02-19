import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// 不导入任何内容,只是为了让对应的模块中的代码执行一次
import './utils/fixed'

ReactDOM.render(<App />, document.getElementById('root'))
