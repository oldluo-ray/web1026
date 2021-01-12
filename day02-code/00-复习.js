/**
 * 
 *  node 
 *      
 *    是一个基于v8引擎的js运行环境
 *    运行js文件: node 文件的路径
 * 
 *     当一个js文件运行在node中的时候,node会自动使用一个函数包裹当前文件中的代码
 *     函数的形参: exports require module __dirname __filename
 *      
 *     __dirname  返回的是当前文件所处文件夹的绝对路径
 *     __filename 当前文件的绝对路径
 * 
 *    立即执行的两个函数: 
 *      setImmediate(回调)  回到执行时在node轮询的check阶段
 *      process.nextTick(回调函数) 在轮询的任何阶段,优先执行
 * 
 *    在poll阶段是如何执行的?
 * 
 *       1. 判断队列中是否有回调
 *          如果有: 执行队列中的回调,一直到执行完毕,或者是内存溢出
 *          如果没有: 
 *              2. 判断是否有setImmediate立即执行函数
 *                  如何有: 进入到check阶段去执行
 *                  如何没有: 等待, 如果等待过程中,有定时器到时间了,就进入下一个阶段,目的是为了回到timers阶段
 *  
 * 
 * commonjs(node中默认支持的模块化的规范)
 *      
 *      导入: require()
 *            自定义的模块   要写模块的路径
 *            系统内置       直接模块的名称
 *            第三方         直接模块的名称
 * 
 *      导出: exports = module.exports = {}
 *          
 *          module.exports.xxx = {}
 *          module.exports= {xxx: 值}
 *          moudle.exports = 值
 *          exports.xxx = 值
 *       
 *       导出时注意的问题: 
 *          1. 要注意顺序,可能会被覆盖
 *          2. 如何module.exports 和 exports 指向了不同的对象. 导出的其实是module.exports的对象
 *      
 * 
 *  包和npm 
 * 
 *      一个项目中,有package.json就可以成为包 
 * 
 *      package.json中有几个重要的字段: 
 *          name: 不能有中文,不能有大写, 不能和其他包名相同
 *          dependencies: 记录了生产环境下的依赖包
 *          devDependencies:  记录了开发环境下的依赖包
 * 
 *      npm指令: 
 *          初始化一个包:npm init -y 
 *          安装包的指令: 
 *              本地包: (都要注意路径)
 *              安装指定包到生产环境下: npm i 包名 
 *              安装指定版本包到生产环境下: npm i 包名@x.x.x 
 *              安装指定包到开发环境下: npm i 包名 -D
 *              自动下载所有依赖包: npm i 
 * 
 *              全局包: (任何路径下都可以)
 *              npm i 包名 -g
 * 
 *              移除包: npm remove 包名
 * 
 *  buffer 
 * 
 *      1. 一个类似于数组的对象.存储的是二进制 
 *      2. 操作buffer效率高,因为相当于直接操作内存
 *      3. 创建buffer对象的时候,长度就固定了,不可变
 * 
 * 
 * 
 * 
 * 
 * 
 */