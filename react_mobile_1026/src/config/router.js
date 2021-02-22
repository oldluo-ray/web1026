// 由于项目中可能有多个页面,手动定义Route组件就不是很方便了,所以定义一个数组,根据数组,动态的渲染Route组件
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import RegisterPhone from '../pages/Register/Registerphone'
// import RegisterCode from '../pages/Register/RegisterCode'
// import RegisterPassword from '../pages/Register/RegisterPassword'
// import Country from '../pages/Country'
import React from 'react'
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const RegisterPhone = React.lazy(() =>
  import('../pages/Register/Registerphone')
)
const RegisterCode = React.lazy(() => import('../pages/Register/RegisterCode'))
const RegisterPassword = React.lazy(() =>
  import('../pages/Register/RegisterPassword')
)
const Country = React.lazy(() => import('../pages/Country'))

// 这个数组最终要渲染出来一个个的Route组件,所以这个数组又被人为的称为路由表
const routerArr = [
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
  {
    path: '/country',
    component: Country,
  },
]

export default routerArr
