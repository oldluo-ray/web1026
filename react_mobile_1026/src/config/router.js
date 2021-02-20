// 由于项目中可能有多个页面,手动定义Route组件就不是很方便了,所以定义一个数组,根据数组,动态的渲染Route组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import RegisterPhone from '../pages/Register/Registerphone'
import RegisterCode from '../pages/Register/RegisterCode'
import RegisterPassword from '../pages/Register/RegisterPassword'

// 这个数组最终要渲染出来一个个的Route组件,所以这个数组又被人为的称为路由表
export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register/phone',
    component: RegisterPhone,
  },
  {
    path: '/register/code',
    component: RegisterCode,
  },
  {
    path: '/register/password',
    component: RegisterPassword,
  },
]
