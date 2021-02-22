import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast,
} from 'antd-mobile'
import { createForm } from 'rc-form'
import { registerPhone } from '../../../api/register'
import './index.css'
import msg from './msg.png'
class VerifyPassword extends Component {
  state = {
    isDisabled: true,
    isShow: false,
  }
  validator = (rules, value) => {
    let isDisabled = true
    if (/^[\w]{8,16}$/.test(value)) {
      isDisabled = false
    }
    this.setState({
      isDisabled,
    })
  }
  // 切换密码是否可见的事件处理函数
  changePswShow = () => {
    let { isShow } = this.state
    this.setState({
      isShow: !isShow,
    })
  }
  // 注册的事件处理函数
  register = async () => {
    const phone = localStorage.getItem('phone')
    const password = this.props.form.getFieldValue('password')
    const res = await registerPhone(phone, password)
    if (res.data.success) {
      Toast.success('注册成功', 2)
      setTimeout(() => {
        this.props.history.replace('/login')
      }, 2000)
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    const { isDisabled, isShow } = this.state
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => console.log(111)}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size="lg"></WhiteSpace>

        <WingBlank size="lg">
          <div className="img">
            <img src={msg} alt="" />
          </div>
          <WhiteSpace size="lg"></WhiteSpace>
          <WingBlank size="lg">
            <div className="tip">请设置登录密码</div>
          </WingBlank>
          <WhiteSpace size="lg"></WhiteSpace>

          <div class="code">
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {
                    validator: this.validator,
                  },
                ],
              })}
              className="psw"
              type={isShow ? 'text' : 'password'}
              clear
              placeholder="请设置8~20位登录密码"
              extra={
                <span
                  onClick={this.changePswShow}
                  className={
                    isShow ? 'iconfont icon-yanjing' : 'iconfont icon-close-eye'
                  }
                ></span>
              }
            ></InputItem>
          </div>
          <WingBlank size="lg">
            <div>
              密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
            </div>
          </WingBlank>
          <WingBlank size="lg">
            <Button
              className="code-next"
              type="warning"
              disabled={isDisabled}
              onClick={this.register}
            >
              完成
            </Button>
          </WingBlank>
          <WingBlank size="lg">
            遇到问题了?
            <a href="http://www.atguigu.com">请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(VerifyPassword)
