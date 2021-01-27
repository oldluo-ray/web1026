/**
 *
 * props
 *
 *
 *   用来接收组件外部的数据
 *
 *   如何传递:  <Test  属性={值} />
 *   如何接收数据:
 *          类组件: this.props
 *          函数组件:  定义形参接收
 *
 *   props的特点:
 *      1. 接收任何类型的数据
 *      2. props是只读的
 *      3. 构造器无法直接通过this.props使用.需要在构造器中接收,然后传入super中
 *
 *   props校验:
 *
 *      引入: import PropTypes from 'prop-types'
 *      配置: 组件.propTypes = {
 *
 *              属性名: PropTypes.数据类型.isRequired
 *
 *            }
 *   props默认值:
 *          组件.defaultProps = {属性:值}
 *
 *
 *
 * 操作表单
 *      受控组件: 组件中表单项的值,被组件的状态控制了.配合onchange使用,在onchange中获取用户输入,动态的修改state,最终要将数据上传给服务器的时候,就只需要拿到state的值就可以
 *
 *      非受控组件: 使用React.createRef()
 *
 *
 *
 *
 *
 */
