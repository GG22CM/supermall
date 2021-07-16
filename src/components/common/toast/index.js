import Toast from "./Toast";


export default {
  install: Vue => {
    //得到组件构造器对象
    const ctr=Vue.extend(Toast);

    //通过组件构造器生成组件
    const toast=new ctr();

    //将此组件对象放入Vue原型中以便于所有的Vue组件都能够使用它
    Vue.prototype.$toast=toast

    //调用$mount方法挂载组件
    toast.$mount(
      //  此处用创建的doc元素挂载
      document.createElement('div')
    )

    //将挂载好的doc元素(toast.$el)添加进入body
    document.querySelector('body').appendChild(toast.$el)
  }

}


