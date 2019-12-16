<template>
    <div>
        <table>
            <tr>
                <!--            v-for 循环,其中key为顺序索引值-->
                <th v-for="(project,key) in project_headers" :key="key">{{project}}</th>
            </tr>
            <tr v-for="(item,key) in projects" :key="key">
                <td>{{item.name}}</td>
                <td>{{item.leader}}</td>
                <td>{{item.app_name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProjectList",
        data() {
            return {
                project_headers: ["项目名称", "项目负责人", "应用名称"],
                projects: [
                    {name: "项目一", leader: "负责人一", app_name: "应用一"},
                    {name: "项目二", leader: "负责人二", app_name: "应用二"},
                    {name: "项目三", leader: "负责人三", app_name: "应用三"}
                ]

            }
        }
    }
</script>

<style scoped>
    table {
        margin: 50px auto;
        border-collapse: collapse;
        width: 40%;
    }

    td, th {
        border: 1px solid seagreen;
        padding: 8px;
    }
</style>