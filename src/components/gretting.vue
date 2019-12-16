<template>
    <div>
        <!--        插值表达式-->
        <h1>{{message}}---{{name}}</h1>
        <!--        v-bind动态绑定属性值，将data中数据绑定到便签的title属性-->
        <span v-bind:title="dream">学号vue</span>
        <!--        条件语句v-if,每次都为重新删除组件或者常见组件,若为false，元素都不会存在-->
        <p v-if="isNot">v-if条件语句</p>
        <!--        显示语句v-show,控制元素是否显示-->
        <p v-show="isNot">v-show语句</p>
        <!--        v-if v-else-if v-else -->
        <span v-if="age > 70">{{username}} 不能玩哦</span>
        <span v-else-if="age>= 18"> {{username}} 玩一玩</span>
        <span v-else> {{username}} 太小了</span>
    </div>


</template>

<script>
    export default {
        name: "gretting",
        data() {
            return {
                message: "Hello World",
                name: "sdas",
                dream: "小目标",
                isNot: true,
                username: "789",
                age: 6
            }
        },
    }
</script>

<style scoped>
    h1 {
        background: antiquewhite;
        color: #42b983;
    }
</style>