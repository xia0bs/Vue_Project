<template>
    <div class="box">

        <el-form ref="form" :model="form">
            <el-upload
                    class="avatar-uploader"
                    action="/uploadimg"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-form-item >
                <el-input v-model="form.thumb" type="hidden"></el-input>
            </el-form-item>
            <el-form-item label="店铺名称" >
                <el-input v-model="form.shopname"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类" >
                <el-input v-model="form.shoptype"></el-input>
            </el-form-item>
            <el-form-item label="店铺公告">
                <el-input v-model="form.notice"></el-input>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "adminssionPross3",
        data:function(){
            return {
                form:{
                    shopname:'',
                    shoptype:'',
                    notice:'',
                    thumb:''
                },
                imageUrl: ''
            }
        },
        methods:{
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.form.thumb = res;
            }
        },
        beforeRouteLeave:function(to,from,next){
            let company =JSON.parse( localStorage.company);
            let obj = Object.assign(company,this.form);
            localStorage.company =JSON.stringify(obj);
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
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        background: #ffffff;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>