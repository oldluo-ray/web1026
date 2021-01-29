/**
 *
 *  生命周期
 *
 *      挂载
 *          constructor  1.绑定this 2. 定义状态
 *          render       不能调用setState
 *          componentDidMount 1. 发送异步请求 2. 操作dom
 *      更新
 *          render
 *          componentDidUpdate 如果要调用setState,要写在if中
 *      卸载
 *          componentWillUnmount 清除操作
 *
 *
 *  组件传递数据
 *
 *       props
 *
 *          1. 嵌套关系
 *          2. 只能从上往下
 *          3. 只能父给子传递
 *
 *       context
 *          1. 嵌套关系
 *          2. 只能从上往下
 *          3. 可以跨级
 *
 *
 *          使用:
 *           创建context对象 保证是同一个context对象
 *           要传递数据的组件中,使用context结构的Provider包裹整个jsx结构
 *           <Provider value={值}>
 *              ...jsx
 *           </Provider>
 *           使用数据的组件中,要使用Consumer组件
 *            方式一: <Consumer>{data=>jsx结构}</Consumer>
 *            方式二: 给组件添加静态属性 contextType, 值为context对象
 *                    this.context指向传过来的值
 *
 *
 *       pubsub
 *
 *          是一个js库(第三方)
 *          下载 npm i pubsub-js
 *          是发布订阅模式(组件之间任意的传递数据,没有什么限制)
 *          使用:
 *              订阅:
 *                  this.token = Pubsub.subscribe('话题', (msg, data)=>{})
 *              发布:
 *                  Pubsub.publish('话题', 数据)
 *              取消订阅:
 *
 *                  Pubsub.unsubscribe(话题) 取消指定话题的所有订阅
 *                  Pubsub.unsubscribe(this.token) 取消指定的订阅
 *                  Pubsub.clearAllSubscriptions(this.token) 取消所有的订阅
 *
 *
 *
 *
 *
 */
