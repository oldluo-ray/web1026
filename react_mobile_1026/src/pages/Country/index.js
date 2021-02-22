import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getCountryData } from '../../api/country'
import './index.css'
const Item = List.Item
console.log('城市选选择加载了')
export default class Country extends Component {
  state = {
    countryList: {},
  }
  async componentDidMount() {
    const res = await getCountryData()
    console.log(res)
    this.setState({
      countryList: res.data.data,
    })
  }
  render() {
    const { countryList } = this.state
    const listArr = Object.keys(countryList)

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color={'#000'} />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <div className="countNavBar">
          {listArr.map((item) => {
            return (
              <a
                key={item}
                onClick={() => {
                  // 找到要展示的那个list的dom对象
                  const element = document.getElementById(item)
                  // console.log(element)
                  element.scrollIntoView()
                }}
              >
                {item}
              </a>
            )
          })}
        </div>
        {listArr.map((item) => {
          const itemArr = countryList[item]

          return (
            <List
              id={item}
              key={item}
              renderHeader={() => item}
              className="my-list"
            >
              {itemArr.map((item, index) => {
                const key = Object.keys(item)[0]
                return (
                  <Item
                    key={index}
                    extra={item[key]}
                    onClick={() => {
                      this.props.history.replace(
                        this.props.location.state.from,
                        { country: item[key] }
                      )
                    }}
                  >
                    {key}
                  </Item>
                )
              })}
            </List>
          )
        })}
      </div>
    )
  }
}
