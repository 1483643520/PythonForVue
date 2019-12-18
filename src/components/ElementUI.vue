<template>
    <div>
<!--        ref 对子组件的引用，组件中定义的ref都会放在当前的$refs属性中，-->
        <el-table
                ref="multipleTable"
                :data="projects"
                tooltip-effect="dark"
                style="width: 415px"
                class="project_new"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="项目名称"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="leader"
                    label="项目负责人"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="app_name"
                    label="应用名称"
                    width="120">
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([projects[1], projects[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <p>===========================================</p>
        <p>调用子路由</p>
        <router-view></router-view>
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
        }, methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            }
        }
    }
</script>

<style scoped>
    .project_new{
        margin: 50px auto;
    }
</style>