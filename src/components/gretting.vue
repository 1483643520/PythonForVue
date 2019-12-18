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
        <!--        v-on: 绑定各种事件，事件触发之后可以执行js操作,可以缩写为@-->
        <span v-else-if="age>= 18" v-on:click="username='999'"> {{username}} 玩一玩</span>
        <!--        绑定事件函数-->
        <span v-else @click="changeUserName"> {{username}} 太小了</span>
        <!--        使用父组件传参-->
        <br>
        <span>接收父组件参数：{{title}}</span>
        <p>===================</p>
        <p>添加全局组件</p>
        <!--        <helloworld>-->
        <!--            &lt;!&ndash;            默认情况下载子组件开始标签和结束标签中间添加的内容会忽略&ndash;&gt;-->
        <!--            &lt;!&ndash;            <p>这是helloWord子组件内容</p>&ndash;&gt;-->
        <!--        </helloworld>-->
        <helloworld>
            <!--            指定使用命名插槽,vue2.6之前-->
            <p slot="part1">2.6之前命名插槽</p>
            <!--            指定使用命名插槽,vue2.6之后版本,v-slot可以用#代替-->
            <template v-slot:part2>2.6之后命名插槽</template>
            <!--            插槽作用域,vue2.6之前-->
            <p slot="part4" slot-scope="scope">
                {{scope.user}} 插槽作用域2.6之前
            </p>
            <!--            插槽作用域,vue2.6之后-->
            <template #part5="scope">
                {{scope.user}} 插槽作用域2.6之后
            </template>
            <template #part6="{user}">
                {{user}} 插槽作用域2.6之后
            </template>
        </helloworld>
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
        //    设置方法
        methods: {
            changeUserName: function () {
                //this 相当于self
                this.username = "改变username"

            }
        },
        //    添加钩子函数，在生命周期自动调用
        created() {
            console.log("实例创建之后能获取到this");
            console.log("username为", this.username);
            // 获取查询字符串参数
            // this.username = this.$route.query.name;
            // this.age =  this.$route.query.age
            //    获取路径名参数
            this.username = this.$route.params.username
        },
        //一般向后端ajax发送请求
        mounted() {
            console.log("vue实例挂在到DOM树之后")
        },
        //从父组件接收参数
        props: {
            msg: String,
            title: Number
        }
    }
</script>

<style scoped>
    h1 {
        background: antiquewhite;
        color: #42b983;
    }
</style>