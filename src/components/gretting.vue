<template>
    <div>
<!--        插值表达式-->
        <h1>{{message}}</h1>
    </div>

    
</template>

<script>
    export default {
        name: "gretting",
        data(){
            return {
                message:"Hello World"
            }
        },
    }
</script>

<style scoped>
h1{
    background: antiquewhite;
    color: #42b983;
}
</style>