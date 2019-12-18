//导入vue js
import Vue from 'vue'
//导入element-ui相关
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入根组件
import App from './App.vue'

// 声明全局组件
import HelloWorld from "./components/HelloWorld";
// 创建全局组件
Vue.component('helloworld', HelloWorld);

//导入vue-router对象,名字为index.js是可以不用的
import router from "./router";

Vue.config.productionTip = false;
//使用elementui
Vue.use(ElementUI);


//创建实例
new Vue({
    router,
    render: h => h(App),  //渲染App根组件
}).$mount('#app'); //指定div 的 id
