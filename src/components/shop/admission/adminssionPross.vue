<template>
    <div>
        <div class="box">
            <div class="left" style="float: left">
                <img src="../static/image/lion.jpg" alt="">
                <span>sxz电商平台</span>
            </div>
            <div style="width: 1000px;float: right;margin-right: 20px" >
                <el-steps :active="active" simple finish-status="success" align-center space="200px">
                    <el-step title="入驻须知"></el-step>
                    <el-step title="企业信息认证"></el-step>
                    <el-step title="店铺信息认证"></el-step>
                    <el-step title="等待审核"></el-step>
                </el-steps>
            </div>
        </div>

        <router-view></router-view>

        <el-button v-if="flag" @click="next" type="success" round class="button">下一步</el-button>
        <el-button v-else @click="onSubmit" type="success" round class="button">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "adminssionPross",
        data() {
            return {
                active: 1,
                flag:true
            };
        },
        methods: {
            next() {
                if (++this.active > 3) {this.active = 4 ; this.flag = false; };

                this.$router.push({name:'adminssionPross'+this.active})
            },
            onSubmit(){
                let company = JSON.parse( localStorage.company );
                this.axios.post('/shop/admission',company).then(res=>{
                    if(res.data === 'success'){
                        this.$message({
                            message:'申请成功',
                            type:'success'
                        })
                    } else if (res.data === 'fail'){
                        this.$message({
                            message:'申请失败',
                            type:'success'
                        });
                        this.$router.push({name:'adminssion'})
                    }
                })
            }

        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
        box-sizing: border-box;
        background: #f5f7fa;
    }
    .box .left{
        width: 480px;
        height: 90%;
    }
    .box .left img {
        width: 100px;
        display: block;
        border-radius: 50%;
        margin-left: 30px;
    }
    .box .left span{
        color: #fff;
        margin-left: 20px;
    }
    .tupian1{
        display: block;
        width: 70%;
        margin: 30px auto;
    }
    .button{
        display: block;
        margin: 0 auto;
    }
</style>