import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'
console.log('login加载了')
export default class Login extends Component {
  state = {
    country: 86,
  }
  toRegister = () => {
    this.props.history.replace('/register/phone', { from: '/login' })
  }

  componentDidMount() {
    // 获取传递过来的区号
    // 如果是直接打开的login页面,那么就不会有区号传递过来.所以要判断一下
    const country =
      this.props.location.state && this.props.location.state.country
    if (country) {
      this.setState({
        country,
      })
    }
  }
  render() {
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color={'#000'} />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem placeholder="请输入手机号">
            <div className="inp-phone">
              <span
                onClick={() => {
                  this.props.history.replace('/country', { from: '/login' })
                }}
              >
                +{this.state.country}
              </span>
              <Icon type="down" />
            </div>
          </InputItem>
          <div className="inp-phone">
            <InputItem placeholder="请输入手机验证码"></InputItem>
            <div className="inp-code-tip">获取验证码</div>
          </div>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
            <Button type="warning" disabled className="login-btn">
              登录
            </Button>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>
            <div className="login-nav">
              <div>账号密码登录</div>
              <div onClick={this.toRegister}>手机快速注册</div>
            </div>
            <div className="login-other">
              <div className="line"></div>
              <div className="text">其他登录方式</div>
              <div className="line"></div>
            </div>
            <div className="login-oauth">
              <i
                className="iconfont icon-github"
                onClick={() => {
                  // 给github发送请求
                  window.location.href =
                    'https://github.com/login/oauth/authorize?client_id=9e66c440e1aea39416e0'
                }}
              ></i>
              <i className="iconfont icon-qq"></i>
              <i className="iconfont icon-wechat"></i>
            </div>

            <div className="login-bottom">
              <span>
                未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
                <a href="http://www.atguigu.com">硅谷隐私政策</a>
              </span>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
