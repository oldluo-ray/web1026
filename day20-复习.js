/**
 *  1. 1px的边框问题
 *
 *      问题的原因: 1px的边框在高清屏上展示的效果看起来比较粗,不是很美观
 *      希望得到的效果: 希望1px的边框在高清屏上,看起来是一个比较细的效果
 *      解决办法:
 *          1. 媒体查询,如果是像素比为2. 那么边框的宽度是0.5px. 像素比为3, 边框的宽度是0.3333px
 *          2. 通过viewport 将布局视口变大.但是盒子的px值不变,所以这样,盒子看起来就变小了.此时边框看起来也变小了. 然后将根标签的字体大小变大.那么盒子也就跟着变大了(其他的盒子正常适配,但是边框不适配)
 *
 *  2. 移动端的事件
 *       touchstart  手指触摸屏幕
 *       touchmove   手指移动
 *       touchend     手指离开屏幕
 *       touchcancle  中断触摸
 *
 *
 *     事件对象身上的属性:
 *        touches             屏幕上的所有的触点
 *        targetTouches       元素上的所有触点
 *        changedTouches      改变的触点
 *
 *
 *      如何获取离开屏幕的触点的信息?
 *          在touchend事件中,通过changedTouches获取
 *
 *       注意:
 *        1. touch事件只在移动端生效
 *        2. 移动端也支持click事件,但是比touchstart要延迟约300ms(如果开启的理想视口,约100ms)
 *        3. 会出现点击穿透(当触发了touchstart事件,约300ms之后,同样的位置会触发click事件)  . 解决: 在touchstart的事件处理函数中执行e.preventDefault()
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
