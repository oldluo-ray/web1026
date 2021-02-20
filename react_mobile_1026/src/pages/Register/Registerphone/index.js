import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
  Modal,
  Toast,
} from 'antd-mobile'
import { createForm } from 'rc-form'
import { verifyPhone } from '../../../api/register'

class index extends Component {
  static displayName = 'RegisterPhone'
  state = {
    isDisabled: true,
  }
  componentDidMount() {
    Modal.alert(
      '注册协议及隐私政策',
      '在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：',
      [
        {
          text: '不同意',
          onPress: () => {
            this.props.history.replace(this.props.location.state.from)
          },
        },
        {
          text: '同意',
          onPress: () => console.log('ok'),
          style: { backgroundColor: 'red', color: '#fff' },
        },
      ]
    )
  }

  // 校验手机号的处理函数
  validator = (rules, value) => {
    //要判断用户输入的内容是否是手机号
    if (/^1[3456789]\d{9}$/.test(value)) {
      console.log('校验成功')
      this.setState({
        isDisabled: false,
      })
    } else {
      this.setState({
        isDisabled: true,
      })
    }
  }
  // 验证手机号是否存在的函数
  verifyPhoneHandle = async () => {
    // 获取手机号:
    const { getFieldValue } = this.props.form
    const phone = getFieldValue('phone')
    // console.log(phone)
    const res = await verifyPhone(phone)
    // console.log(res)
    //判断手机号是否注册过
    if (res.data.success) {
      // 没有注册,可以下一步
      Modal.alert(null, '我们将发送短信/语音验证码至:' + phone, [
        {
          text: '不同意',
        },
        {
          text: '同意',
          onPress: () => console.log('ok'),
          style: { backgroundColor: 'red', color: '#fff' },
        },
      ])
    } else {
      //已经注册过了,需要提示用户
      Toast.fail(res.data.message, 2)
    }
  }
  render() {
    const { isDisabled } = this.state
    const { getFieldProps } = this.props.form
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color={'#000'} />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validator,
                },
              ],
            })}
            placeholder="请输入手机号"
          >
            <div className="inp-phone">
              <span>+86</span>
              <Icon type="down" />
            </div>
          </InputItem>

          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
            <Button
              type="warning"
              disabled={isDisabled}
              className="login-btn"
              onClick={this.verifyPhoneHandle}
            >
              下一步
            </Button>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(index)
