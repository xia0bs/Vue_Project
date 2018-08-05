<template>
    <div class="box">
        <el-form ref="form" :model="form">
            <el-form-item label="企业名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="企业所在地" prop="location">
                <el-input v-model="form.location"></el-input>
            </el-form-item>
            <el-form-item label="企业详细地址" prop="address">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="企业类型" prop="type">
                <el-input v-model="form.type"></el-input>
            </el-form-item>
            <el-form-item label="企业电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="企业规模" prop="scale">
                <el-input v-model.number="form.scale"></el-input>
            </el-form-item>
            <el-form-item label="企业联系人姓名" prop="legalperson">
                <el-input v-model="form.legalperson"></el-input>
            </el-form-item>
            <el-form-item label="企业联系人邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "adminssionPross2",
        data: function () {
            return {
                form: {
                    name:'',
                    location:'',
                    address:'',
                    type:'',
                    phone:'',
                    scale:'',
                    legalperson:'',
                    email:''
                },
                rules: {
                    name: [
                        {require:true,message:'请输入公司名称',trigger:'blur'},
                        {min:3 , max: 20 ,message:'请输入3~20个字符',trigger:'blur'},
                    ],
                    location: [
                        {require:true,message:'请输入公司地址',trigger:'blur'},
                        {min:3 , max: 20 ,message:'请输入3~20个字符',trigger:'blur'},
                    ],
                    address: [
                        {require:true,message:'请输入公司详细地址',trigger:'blur'},
                        {min:3 , max: 100 ,message:'请输入3~100个字符',trigger:'blur'},
                    ],
                    type: [
                        {require:true,message:'请输入公司类型',trigger:'blur'},
                        {min:3 , max: 20 ,message:'请输入3~20个字符',trigger:'blur'},
                    ],
                    phone: [
                        {require:true,message:'请输入公司名称',trigger:'blur'},
                        {min:3 , max: 20 ,message:'请输入3~20个字符',trigger:'blur'},
                    ],
                    scale: [
                        {require:true,message:'请输入公司名称',trigger:'blur'},
                        {type:'number',message:'请输入数字',trigger:'blur'},
                    ],
                    email: [
                        {require:true,message:'请输入公司名称',trigger:'blur'},
                        {type:'email' ,message:'请输入正确的邮箱',trigger:'blur'},
                    ],
                    legalperson: [
                        {require:true,message:'请输入法人',trigger:'blur'},
                        {min:3 , max: 20 ,message:'请输入3~20个字符',trigger:'blur'},
                    ],
                }
            }
        },
        beforeRouteLeave:function(to,from,next){
            localStorage.company = JSON.stringify(this.form);
            next();
        }

    }
</script>

<style scoped>
  .box{
      width: 1000px;
      height: auto;
      margin: 0 auto;
  }
    .el-form{
        width: 100%;
    }
</style>