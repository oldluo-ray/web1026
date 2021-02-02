/***
 *
 *
 *
 * redux
 *   js中用于集中管理数据的工具
 *
 *   store  管理对象.存储了数据,并且管理了action和reducer
 *        import {createStore} from 'redux'
 *        const store = createStore(reducer[,初始数据],applyMiddleware(中间件,中间件))
 *   reducer  具体修改数据的一个函数(1. 创建store的时候,调用. 2. dispatch的时候调用)
 *         function 函数名(state=初始数据, action){
 *
 *              switch(action.type){
 *
 *                  case 需求类型:
 *
 *                      return {
 *                          ...state,
 *                          属性: 值
 *                      }
 *
 *
 *                  default:
 *                      return state
 *
 *
 *              }
 *
 *
 *         }
 *
 *   action  需求对象
 *      {type: 常量, 属性: 值}
 *      一般会定义一个actionCreator

 * react-redux
        就是将react和redux连接起来

       1. 在App跟组件中,使用Provider,包裹整个结构
            <Provider store={store对象}>
                ...应用的结构
            </Provider>
       2. 在需要使用redux数据的组件中(展示组件)
            使用connect函数,得到一个高阶组件.最终渲染的其实是高阶组件
          connect函数会对传入的actionCreator进行封装,得到一个和actionCreator同名的函数,这个函数中,调用dispatch
          connect(state=>({属性: state.属性}), {actionCreator})(展示组件)
       
 *
 *  redux-thunk 
 * 
 *      用来在redux中执行异步的一个包
 * 
 *      1. import thunk from 'redux-thunk' 
 *      2. createStore(reducer[,初始数据],applyMiddleware(thunk))
 *      3. 在actions.js中.定义一个异步action
 *          function xxxAsync(){
 *              return (dispatch)=>{
 *                  //执行异步,异步成功之后,调用dispatch   
 *              }
 *          }
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
 *
 *
 */
