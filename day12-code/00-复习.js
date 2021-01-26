/**
 *
 *    1. 注册事件 <div onClick={事件处理函数}></div>
 *      注册事件的问题: 事件处理函数的this指向的是undefined
 *      解决方案:
 *         1.1 在构造函数中,this.handle = this.handle.bind(this)
 *         1.2 <div onClick={()=>{this.handle()}}></div>
 *         1.3 类的实例方法  handle = () =>{} 这种写法,是把函数直接添加到了实例上
 *
 *      实例属性: 实例对象的属性.只有实例对象可以访问
 *      静态属性: 构造函数/类的属性,只有构造函数/类可以访问
 *
 *    2. react中的脚手架工具叫做create-react-app
 *       脚手架工具的作用: webpack和项目结构都已经配置好,所以开发者只需要关心业务逻辑
 *       使用: npm i create-react-app -g     create-react-app 项目名称
 *             npx create-react-app 项目名称
 *
 *       public下面至少有一个index.html   src下面至少有一个index.js 入口文件
 *
 *
 *     3. 实际上,在未来的开发中,一个react应用,都是由一个个的组件组成的
 *
 *       函数组件
 *
 *             1. 首字母要大写
 *             2. 必须要写return 返回的结果就是要渲染的html结构,也可以写null
 *             3. 返回的jsx结构,至少要有个一个根标签
 *
 *       类组件
 *             1. 首字母必须大写
 *             2. 每一个类组件都要继承 React.Component
 *             3. 一定要写一个render函数
 *             4. render中必须写返回值. 返回值也是一个jsx, 也可以写null
 *             5. 返回的jsx结构,至少有一个根标签
 *
 *       使用: <组件名 /> 自闭合或双标签都可以
 *
 *
 *      类组件可以定义状态,函数组件不能定义状态
 *      状态其实就是组件私有的数据(组件实例自己的数据)
 *
 *
 *      定义状态:
 *            constructor(){
 *               super()
 *               this.state = {属性: 值}
 *            }
 *            简写: 在类中直接写:
 *            state = {}
 *
 *
 *     获取状态: this.state.属性名
 *     修改状态: this.setState() 1. 修改数据  2. 更新视图
 *
 *
 *
 *
 *      props:
 *        组件接收外部传递过来的数据的
 *
 *        传递数据:  <Test 属性={值} />
 *        接收:
 *             类组件: this.props
 *             函数组件: 形参接收 props
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
