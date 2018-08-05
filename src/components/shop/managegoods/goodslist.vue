<template>
    <div class="right">
         <router-link :to="{name:'step1'}" tag="el-button">添加商品</router-link>
        <el-table
                :data="goodslist"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="gid"
                    label="GID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop='code'
                    label="编号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="category"
                    label="分类"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="discount"
                    label="折扣价"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="discount"
                    label="缩略图"
                    width="120">
                <template slot-scope="scope">
                    <img :src="scope.row.thumb" alt="" width="80">
                </template>
            </el-table-column>
            <el-table-column
                    prop="h2name"
                    label="所属分类2"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="h1name"
                    label="所属分类1"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="putaway"
                    label="上架"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>

<script>
    export default {
        name: "goodslist",
        data(){
           return {
               goodslist:[]
           }
        },
        methods:{
          getData(){
              let sid = localStorage.sid;
              this.axios.get('/shop/goodslist/query?sid='+sid).then(res=>{
                  this.goodslist = res.data
              })
          },
            handleClick(){

            }
        },
        mounted(){
            if(!localStorage.isLogin){
                this.$router.push({name:'shoplogin'});
            }
            this.getData()
        }
    }
</script>

<style scoped>
    .right{
        position: absolute;
        left: 200px;
        top: 60px;
        right: 0;
        bottom: 0;
        padding: 20px;
    }
</style>