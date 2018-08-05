<template>
    <div class="right">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            <el-breadcrumb-item style="	color: #30d366;">添加商品</el-breadcrumb-item>
        </el-breadcrumb>

        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
            <el-step title="步骤 1" ></el-step>
            <el-step title="步骤 2" ></el-step>
            <el-step title="步骤 3" ></el-step>
        </el-steps>

        <router-view></router-view>


        <el-button style="margin-top: 12px;" @click="handleSubmit" v-if="active==3">提交</el-button>
        <el-button style="margin-top: 12px;" @click="next" v-else>下一步</el-button>
    </div>
</template>

<script>
    export default {
        name: "goodsadd",
        data() {
            return {
                active: 1
            };
        },

        methods: {
            next() {
               this.active++;
               if(this.active > 3){
                   this.active = 3;
                   return ;
               }
               this.$router.push({name:'step'+this.active})
            },
            handleSubmit(){
                let form  =  JSON.parse(localStorage.goods);
                form.sid = localStorage.sid;
                this.axios.post('/shop/goodslist/insert',form).then(res=>{
                    if(res.data === 'success'){
                        this.$message({
                            message:'商品添加成功',
                            type:'success'
                        });
                        this.$router.push({name:'goodslist'});
                    }else if(res.data === 'fail'){
                        this.$message({
                            message:'商品添加失败',
                            type:'error'
                        });
                        this.$router.push({name:'step1'});
                    }
                })
            }
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