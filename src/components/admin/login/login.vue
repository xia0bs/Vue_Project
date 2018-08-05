<template>
    <div class="box">
        <div class="login">
            <div class="header">
                <img src="../static/image/lion.jpg" alt="" ref="image">
                <h1 ref="title">sxz管理系统</h1>
            </div>
            <div class="myform" >
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item label-position="top" prop="username">
                        <el-input placeholder="账号" v-model="form.username" ></el-input>
                    </el-form-item>
                    <el-form-item label-position="top" prop="password">
                        <el-input type="password" placeholder="密码" v-model="form.password"></el-input>
                    </el-form-item>
                    <div style="height: 60px;"></div>
                    <el-form-item>
                        <el-button type="success" round @click="onSubmit">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name:'login',
     data:function(){
         return {
            form:{
                username:'',
                password:''
            } ,
            rules:{
               username:[
                   { required: true, message: '请输入用户名', trigger: 'blur' },
                   { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
               ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ]
            }
         }
     },
     methods:{
        onSubmit(){
           this.$refs.form.validate(valid=>{
               if(valid){
                   this.axios.post('/admin/login/check',this.form).then(res=>{
                       if(res.data === 'success'){
                         this.$router.push({name:'manageshop'})
                       }else if(res.data === 'fail'){
                           this.$message({
                               message: '登陆失败',
                               type: 'error'
                           });
                       }
                   })
               }else{
                   this.$message({
                       message: '验证失败',
                       type: 'error'
                   });
               }
           })
        },

     }
 }

</script>

<style scoped>
    .box {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: url("../static/image/login.png") center / cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        width: 651px;
        height: 520px;
        background-color: #ffffff;
        box-shadow: 0 14px 40px 0 rgba(46, 170, 254, 0.72);
        border-radius: 10px;
        padding: 30px 110px 70px;
        box-sizing: border-box;
    }

    .header {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header > img {
        width: 150px;
        height: auto;
    }

    .header > h1 {
        font-size: 20px;
        color: #3e474e;
        line-height: 2.5;
    }

    .myform {
        width: 430px;
        margin: 40px auto;

    }
</style>