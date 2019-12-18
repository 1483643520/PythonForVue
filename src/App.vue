<!--template是用于展现给用户，详单与MVVM模式中的V，相当于body标签-->
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--    在父组件中给子组件中传值-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App" txt="11111"/>-->
        <!--    给子组件传值-->
        <!--    <gretting msg="父组件传值msg" :title="title"></gretting>-->
        <!--    <ProjectList></ProjectList>-->
        <!--    <ElementUI></ElementUI>-->
        <!--    <Login></Login>-->

        <!--    使用创建的全局组件-->
        <!--    <helloworld></helloworld>-->
        <!--    调用加载router-view ，展示路由的页面内容-->

        <!--      使用router-link实现页面跳转-->
        <ul>
            <li>
                <!--                也可以使用命名字符-->
                <router-link :to="{name:'home'}">主页</router-link>
            </li>
            <li>
                <!--                添加路径参数-->
                <router-link :to="{name:'gretting',params:{username:15}}">gretting</router-link>
            </li>
            <li>
                <router-link to="/ElementUI">ElementUI</router-link>
            </li>
            <li>
                <router-link to="/Login">Login</router-link>
            </li>
            <li>
                <router-link to="/ProjectList">ProjectList</router-link>
            </li>
        </ul>
        <!--        导入路由-->
        <router-view></router-view>
    </div>
</template>
<!--script js代码-->
<script>
    //导入子组件
    // import HelloWorld from './components/HelloWorld.vue'
    // import gretting from "./components/gretting";
    // import ProjectList from "./components/ProjectList";
    // import ElementUI from "./components/ElementUI";
    // import Login from "./components/Login";

    export default {
        //定义组件名称
        name: 'app',
        //声明子组件
        components: {
            // HelloWorld,
            // gretting,
            // ProjectList,
            // ElementUI,
            // Login
        },
        data() {
            return {
                title: "父组件Data传参title"
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
