//vue中路由的使用
//0.安装并导入npm install vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. 导入组件
import gretting from "../components/gretting";
import ElementUI from "../components/ElementUI";
import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList";

// 3.创建路由
const router = new VueRouter({
    mode:"history",
    //构建路由对象，数据中一个对象代表一条路由
    routes: [
        {path: '/HelloWorld', component: HelloWorld, name:"home"},
        //在组件汇总可以通过this.$router.query 属性获取查询字符串参数
        //定义路径参数 路径/:参数名
        {path: '/gretting/:username', component: gretting, name:"gretting"},
        {path: '/ElementUI', component: ElementUI, name:"ElementUI"},
        {path: '/Login', component: Login, name:"Login",
        //定义自路由
        children:[
        //    查找到自路由后，首先渲染根，然后渲染父组件，然后渲染子组件,添加在父组件渲染“ <router-view></router-view>”
            {path:"", component:Login},
            {path:"/ElementUIChildren", component:ElementUI},
            //不加斜杠代表路径拼接
            {path:"ElementUIChildren2", component:HelloWorld},

        ]
        },
        {path: '/ProjectList', component: ProjectList, name:"ProjectList"}
    ]
});

//4.导出路由
export default router;