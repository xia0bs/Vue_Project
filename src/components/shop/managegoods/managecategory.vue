<template>
    <div class="right">
        <router-link :to="{name:'categoryadd'}" tag="el-button" class="el-button el-button--success is-round">添加分类</router-link>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="栏目id"
                    >
            </el-table-column>
            <el-table-column
                    prop="cname"
                    label="栏目名称"
            >
            </el-table-column>
            <el-table-column
                    prop="pid"
                    label="父栏目id">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "goodslist",
        data:function(){
            return {
                tableData: []
            }
        },
        methods:{
            getData(){
                this.axios.get('/shop/manage/categoryquery').then(res=>{
                   this.tableData =  res.data;
                })
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style scoped>
    .right{
        position: absolute;
        left:200px;
        right: 0;
        top: 60px;
        bottom: 0;
        padding: 10px;
    }
</style>