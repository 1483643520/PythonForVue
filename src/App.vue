<!--template是用于展现给用户，详单与MVVM模式中的V，相当于body标签-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    在父组件中给子组件中传值-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" txt="11111"/>-->
<!--    <gretting></gretting>-->
    <ProjectList></ProjectList>
  </div>
</template>
<!--script js代码-->
<script>
  //导入子组件
// import HelloWorld from './components/HelloWorld.vue'
// import gretting from "./components/gretting";
import ProjectList from "./components/ProjectList";

export default {
  //定义组件名称
  name: 'app',
  //声明子组件
  components: {
    // HelloWorld,
    // gretting,
    ProjectList
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
