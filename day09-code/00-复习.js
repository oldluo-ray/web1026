/**
 *
 *  1. axios 是一个前端常用的发送异步请求的库
 *
 *  使用: axios({
 *
 *      method: 请求方法
 *      url: 请求的地址
 *      params: {}  用于get请求上传数据
 *      data: {} 用于post/put/delete请求上传数据
 *
 *  })
 *  返回的是一个promise对象
 *  axios.get()
 *  axios.post()
 *  axios.all([promise对象,promise对象]) 用于并行的发送多次请求 返回的也是一个promise.传入的多个promise都成功了,返回的这个promise才成功
 *
 *
 *
 *
 *  2. 模块化:
 *      每一个js文件,就是一个模块
 *
 *      为什么要模块化:
 *
 *          1. 多人协作开发
 *          2. 避免全局变量污染
 *          3. 私有化数据
 *          4. 实现懒加载
 *
 *
 *     模块化的规范: 解决了工作中想要实现模块化的思路
 *     commonjs  node平台实现了这个规范
 *     AMD       require.js
 *     CMD       sea.js
 *     ES6       但是需要使用es6也需要一些其他的包支持
 *
 *
 *
 *
 *
 *
 */
