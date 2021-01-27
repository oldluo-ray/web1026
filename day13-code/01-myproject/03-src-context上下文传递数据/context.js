// 注意: 模块虽然被引入了多次,但是模块里面的代码只执行了一次.所以只有一个context对象
import React from 'react'
// 注意: context对象的默认值,是在不写provider的时候生效
export default React.createContext('默认值')
