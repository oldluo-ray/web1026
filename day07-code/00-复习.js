/**
 *
 *
 *  cookie
 *
 *      cookie是浏览器中存储数据的一个容器
 *      针对每一个域名都有一个对应的存储区域
 *      键值对的形式
 *      document.cookie
 *
 *      每一次给服务器发送请求的时候,浏览器会检查,请求的这个域名下是否有cookie数据,如果有,浏览器自动将cookie中的数据放到请求头里面,上传给服务器
 *
 *      cookie存储的默认时间是会话: 会话是指打开浏览器请求服务器之后,直到关闭浏览器
 *      自定义:maxAge单位是毫秒
 *
 *  session
 *
 *      服务器端的一个存储数据的容器(现在一般讲数据存储到数据库中)
 *
 *      cookie和session配合使用:
 *      1. 浏览器给服务器发送请求登录,服务器接收到请求,要做登录校验.
 *      2. 校验成功之后,服务器会把用户信息存储在session中,将用户信息单独存储在一个区域中,得到一个sessionid(存储数据的区域的唯一标识符)
 *      3. 将sessionid相应给浏览器,然后浏览器接收到之后,存储在cookie中
 *      4. 再次发送请求的时候,浏览器会自动将cookie中的sessionId发送给服务器
 *      5. 服务器根据这个sessionid,去session空间中查找指定的信息
 *      6. 如果找到了,表示登录过.  如果没找到,表示没有登录/退出了
 *
 *
 *      cookie: 一般最多50条数据, 一条4kb
 *      session: 理论上没有大小限制
 *
 *  ajax
 *
 *     ajax的特点:
 *          1. 页面不会跳转(可以实现局部刷新)
 *          2. 是异步请求,不会阻塞代码执行
 *          3. 请求方式不受限制
 *
 *
 *    基本的发送请求的实现
 *        1. 创建xhr(xmlhttprequest)
 *          const xhr = new XMLHttpRequest()
 *        2. 设置请求行
 *          xhr.open(请求方式, 路径?参数)
 *        3. 设置请求头
 *          xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
 *        4. 设置请求主体并发送请求
 *          xhr.send('键=值')
 *
 *        //响应
 *
 *        xhr.onreadystatechange = function(){
 *              触发readyState值为2,3,4
 *
 *              if(xhr.readyState === 4){
 *
 *                      //响应完成
 *
 *                  if(xhr.status === 200){
 *
 *                          // 响应成功
 *
 *                      xhr.responseText  是一个字符串
 *                  }
 *
 *
 *
 *              }
 *
 *        }
 *
 *
 *
 *
 *
 *
 *
 */
