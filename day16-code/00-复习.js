/**
 * hook规则:
 *
 *  1. 只能在函数组件,其他钩子函数中使用.不能再类组件和普通函数中使用
 *  2. 必须在顶级作用域,一般写的时候写在最上面
 *
 *
 *  自定义hook: 自定义函数.一般函数名是useXXX这种格式
 *
 * 前端路由:
 *     作用: 单页面应用(single page application)
 *     前端路由的原理: 浏览器给服务器第一次发送请求,获取到一个html页面,这个页面中包含了所有的视图.但是默认只展示某一个. 当浏览器地址栏的路径发生变化,那么视图就会根据路径自动切换视图. 这时浏览器没有发送请求.
 *
 *      在react中使用前端路由:使用react-router-dom
 *
 *      BrowserRouter as Router  一个单页面应用只用一次.包裹整个应用的结构即可
 *      Link    改变地址栏的路径,但不发送请求
 *      Route   定义了路由的规则
 *
 *      Switch组件,用来包裹Route,那么前面的Route匹配成功了,后面的就不再匹配了
 *
 *      Redirect 重定向 from属性  to属性  其中Redirect被Switch包裹了之后,from才有效
 *      NavLink 根Link作用一样,但是可以自动添加类名,实现高亮.
 *      默认是active这个类名.如果要自定义类名: activeClassName
 *
 *      history
 *
 *          push(/路径/:参数?, 传递过去的数据)   可以修改路径,切换视图
 *          replace(/路径/:参数?, 传递过去的数据)  可以修改路径,切换视图
 *
 *      location
 *          state 用来获取编程式传递过来的数据
 *
 *      match
 *          params 用来接收路由参数
 *
 *
 *      只有被Route组件渲染的组件,才可以通过props获取到这三个对象
 *
 *      withRouter是react-router-dom这个包提供的一个高阶组件.用来给不是被Route渲染的组件,传递history,match,location这三个对象的
 *
 *
 *
 *      嵌套路由: 在一个路由组件中,定义了其他的路由
 *      要展示二级路由,要保证一级路由要展示出来
 *      办法: 定义二级路由的时候,路径前面拼接一级路由的路径
 */

// function fn(WrappedComponent) {
//     return function(){
//         return class extends Component {
//             return  <WrappedComponent></WrappedComponent>
//         }
//     }

// }

function fn() {
    // 撒打发斯蒂芬
  function fn1() {
    function fn2() {
      function fn3() {}
      fn3()
    }
    fn2()
  }
  fn1()
  console.log(1)
}

fn()
