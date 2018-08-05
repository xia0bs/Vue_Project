<template>
    <div class="right">
        <el-form ref="form" :model="form" label-width="80px" >
            <el-form-item label="父栏目">
                <el-select v-model="form.pid" placeholder="请选择活动区域">
                    <el-option label="一级栏目" value="0"></el-option>
                    <el-option v-for="item in categorylist" :label="item.cname" :value="item.id" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="栏目名称" style="width: 300px;">
                 <el-input  v-model="form.cname" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "categoryadd",
        data:function () {
            return {
                form:{
                    pid:'',
                    cname:''
                },
                categorylist:[]
            }
        },
        methods:{
            getCategory(){
               this.axios.get('/shop/manage/categorylist').then(res=>{
                    this.categorylist =  res.data;
               })
            },
            onSubmit(){
                this.axios.post('/shop/manage/categoryinsert',this.form).then(res=>{
                    if(res.data === 'success'){
                        this.$router.push({name:'managecategory'});
                    }else if(res.data ==='fail'){
                        this.$message({
                            message:'栏目添加失败',
                            type:'info'
                        })
                    }
                })
            }
        },
        mounted(){
            this.getCategory();
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