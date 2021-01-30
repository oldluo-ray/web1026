/**
 * Fragment
 *
 *      使用Fragment包裹jsx结构,并且不会渲染
 *      <React.Fragment></React.Fragment>
 *      简写:  <></>
 *
 * 性能优化
 *      1. 减轻state. 跟页面渲染无关的数据,不要存储在state中
 *      2. 使用shouldComponentUpdate
 *          触发时机: 更新阶段: 传入新的props,setState
 *          作用: 控制后面的render函数是否执行,返回true就执行,返回false就不执行
 *          shouldComponentUpdate(nextProps, nextState) 接收到的是最新的数据,
 *          this.props或this.state在这个函数中表示之前的数据
 *
 *      3. 纯组件(PureComponent)
 *          纯组件中帮助我们实现了shouldComponentUpdate.自动比较了所有的props和state. 但是他是浅层对比
 *
 *
 *
 * 为了实现组件内代码的复用: 可以使用高阶组件和renderprops
 * 高阶组件(HOC)
 *
 *     function withXXX(WrappedComponent){
 *
 *          return class extends Component{
 *
 *               static displayName = '名称'
 *
 *              ...定义公共的状态和逻辑
 *
 *              render(){
 *                 return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
 *              }
 *
 *          }
 *
 *     }
 *
 *
 * renderProps
 *
 *      class XXX extends Component {
 *
 *          ...定义状态和逻辑
 *
 *          render(){
 *              return this.props.render(数据)
 *              return this.props.children(数据)
 *          }
 *
 *
 *     }
 *
 *     <XXX render={data=>要渲染的组件}></XXX>
 *     <XXX>{data=>要渲染的组件}</XXX>
 *
 *
 * hook
 *
 *      是react16.8的新特性
 *      作用: 在函数组件中,实现跟类组件一样的功能
 *      useState, useEffect
 *
 *      import {useState, useEffect} from 'react'
 *
 *      const [属性名, 操作属性的方法] = useState(初始值)
 *
 *      外层函数模拟了组件的挂载和更新
 *      useEffect(()=>{
 *          内部函数模拟了组件的即将卸载
 *          return ()=>{}
 *      },[])
 *
 *      1. 因为是模拟,所以在更新的时候,先卸载,后更新
 *      2. 如果第二个参数传入空数组, 则不模拟更新了
 *      3. 数组中可以监听数据,数据发生变化,则模拟更新,否则不模拟
 *
 *
 *
 *
 *
 */
