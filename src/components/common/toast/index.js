import Toast from './Toast.vue'

const obj= {}
//插件的安装函数，在页面加载后自动执行
//默认的参数是Vue
obj.install = function (Vue){
  //这里拿不到Toast对象，因为它没地方挂载
  // document.body.appendChild(Toast.$el)
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //new一个组件对象
  const toast = new toastConstructor()
  //将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //toast.$el对应的就是上面的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj