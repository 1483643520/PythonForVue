<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{ txt }}</h1>

        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <p>===================</p>
        <p>渲染接口获取的图片</p>
        <el-image :src="url" fit="cover"></el-image>
        <!--      第一种方式插槽-->
        <!--        <slot></slot>-->
        <!--      第二种方式，若调用该组件时没有插槽内容则显示插槽默认内容-->
        <slot><p>默认插槽内容</p></slot>
        <!--        第三种方式 命名插槽-->
        <slot name="part1"></slot>
        <slot name="part2"></slot>
        <!--        插槽作用域-->
        <slot name="part4" :user="username"></slot>
        <slot name="part5" :user="username"></slot>
        <slot name="part6" :user="username"></slot>





    </div>
</template>

<script>
    //导入axios
    // import axios from "axios"
    // 导入功能函数
    import {dogs} from "../../api/api"

    export default {
        name: 'HelloWorld',
        props: {
            msg: String,//从父组件接收数据
            txt: String,
        },
        data() {
            return {
                url: "",
                username:"username"
            }
        },
        //  开启axios异步请求,添加钩子函数，在生命周期自动调用
        mounted() {
            //方式一、不推荐
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //     .then(function (response) {
            //             console.log(response.data)
            //             此时的this时当前函数，不是vue对象
            //             this.url = response.data.message
            //         }
            //     )
            //     .catch(function (err) {
            //       console.log(err)
            //     });
            //方式二、定义箭头函数,response => 没有this 此时的this 就可以指定vue对象
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //     .then(response => {
            //             console.log(response.data);
            //             //此时的this 就可以指定vue对象
            //             this.url = response.data.message
            //         }
            //     )
            //     .catch(function (err) {
            //       console.log(err)
            //     });
            //  方式三调用功能函数
            dogs()
                .then(response => {
                        console.log(response.data);
                        //此时的this 就可以指定vue对象
                        this.url = response.data.message
                    }
                )
                .catch(function (err) {
                    console.log(err)
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
