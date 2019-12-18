<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" :label-position="labelPosition">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
        </el-form>

        <p>===========================================</p>
        <p>调用子路由</p>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                labelPosition: "right",
                ruleForm: {
                    username: '',
                    password:''
            }}
        }
    }
</script>

<style scoped>
    input {
        margin: 10px auto;
        font-size: medium;
    }

    label {
        margin-right: 10px;
    }
    .login{
        width: 350px;
        margin: 50px auto;
    }
</style>