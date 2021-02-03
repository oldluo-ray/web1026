/***
 *
 *  1. 使用调试工具
 *
 *     开发环境下使用调试工具,生产环境下不使用
 *     process.env.NODE_ENv 可以获取到当前代码的执行环境
 *
 *  2. 合并reducer
 *     为了协作开发,reducer函数会分成多个模块. 但是创建store的时候,就只能传入一个reducer.所以需要将多个reducer合并起来
 *
 *      import {combineReducers} from 'redux'
 *      const rootReduer = combineReducers({
 *          属性: reducer函数,
 *          属性: reducer函数
 *      })
 *
 *      store中的state的数据结构:
 *      {
 *          某个reducer的属性: {
 *              这个reducer的数据
 *            }
 *
 *          某个reducer的属性: {
 *              这个reducer的数据
 *            }
 *       }
 *
 * 
 *
 *
 *
 *
 *
 */
