// 由于项目中可能有多个页面,手动定义Route组件就不是很方便了,所以定义一个数组,根据数组,动态的渲染Route组件
import Home from '../pages/Home'
import Login from '../pages/Login'
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]
