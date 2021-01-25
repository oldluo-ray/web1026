/**
 *
 *  1. react是用于构建用户界面的js库
 *
 *  2. 使用: react.js 和 react-dom.js
 *     react.js提供了react中的一些核心的api. react-dom.js提供了操作dom的api
 *     React.createElement() 创建react元素/虚拟dom
 *     ReactDOM.render(虚拟dom, 要将虚拟dom插入到的真实dom的对象)
 *
 *  3. jsx javascript xml (就是可以在js中写标签)
 *
 *      let div = <div></div>
 *     注意: jsx浏览器不认识并且react和react-dom这两个包,都不能解析jsx. 所以需要一个babel的包. babel将jsx解析成React.createElement. 然后react的包,再执行createElement创建虚拟dom. 最终在渲染的时候,react根据虚拟dom,创建真实dom
 *
 *
 *  4. jsx中插入数据, 条件渲染, 列表渲染, 添加样式
 *
 *      使用插值表达式: {}
 *      插值表达式可以写什么? 可以写表达式, 不可以写语句
 *      插值表达式可以写在哪里: 一般写在子节点和属性的值的位置上
 *      条件渲染: {三元} / {与或逻辑}
 *      列表渲染: 由于react可以直接将一个数组中的内容,取出来按照顺序渲染到页面上
 *      所以列表渲染,一般使用数组的map方法,得到一个存储了要渲染的虚拟dom的数组.然后直接渲染这个数组就可以了
 *      {数组.map(item=>{
 *          return 要渲染的虚拟dom
 *      })}
 *      注意: 虚拟dom上要加一个key属性,为了react底层执行效率更高.要加在最外层
 *
 *
 *      添加样式: 类名,  行内
 *       let obj = {color: 'read', fontSize: 18}
 *      行内:  let div = <div style={obj}></div>
 *      行内必须传入一个对象, 属性要写成小驼峰. 值如果有单位,可以忽略
 */
