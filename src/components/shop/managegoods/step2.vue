<template>
    <div class="box">

        <el-form ref="form" :model="form" label-width="100px">
            <h1> 基本信息 </h1>
            <el-form-item label="商品分类">
                <el-input v-model="form.category" readonly></el-input>
            </el-form-item>
            <el-form-item label="商品货号">
                <el-input v-model="form.code"></el-input>
            </el-form-item>
            <el-form-item label="商品名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品折扣价">
                <el-input v-model="form.discount"></el-input>
            </el-form-item>
            <el-upload
                    class="avatar-uploader"
                    action="/uploadimg"
                    :on-success="handleAvatarThumb"
            >
                <img v-if="imageUrl" :src="imageThumb" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <el-upload
                    class="avatar-uploader"
                    action="/uploadimg"
                    :on-success="handleAvatarImage"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <el-input type="hidden" v-model="form.thumb"></el-input>



            <el-input type="hidden" v-model="form.image"></el-input>


            <h1>其他信息</h1>

            <el-form-item label="上架">
                <el-switch
                        v-model="form.putaway"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
            </el-form-item>
            <el-form-item label="商品关键字">
                <el-input v-model="form.keywords"></el-input>
            </el-form-item>
            <h1>关联分类</h1>
            <div class="box1">
                <h1> 请选择第一级类别</h1>
                <ul>
                    <li>
                        <el-radio-group v-model="form.relative1" style="display: flex;flex-direction: column">
                            <el-radio v-for="item in listh1" :label="item.id"  :key="item.id">{{item.cname}}</el-radio>
                        </el-radio-group>
                    </li>
                </ul>
            </div>
            <div class="box1">
                <h1> 请选择第二级类别</h1>
                <ul>
                    <el-radio-group v-model="form.relative2" style="display: flex;flex-direction: column">
                        <el-radio v-for="item in listh2" :label="item.id"  :key="item.id">{{item.cname}}</el-radio>
                    </el-radio-group>
                </ul>
            </div>
            <div style="clear: both"></div>


        </el-form>
    </div>
</template>

<script>
    export default {
        name: "step2",
        data(){
            return {
                form:{
                    category:'',
                    code:'',
                    name:'',
                    price:'',
                    description:'',
                    discount:'',
                    thumb:'',
                    image:'',
                    putaway:true,
                    keywords:'',
                    relative1:'',
                    relative2:'',

                },
                listh1:[],
                listh2:[],
                imageUrl:'',
                imageThumb:''
            }
        },
        methods:{
            handleAvatarImage(res,file){
                console.log(res);
                this.imageUrl = URL.createObjectURL(file.raw);
                this.form.image = res;
            },
            handleAvatarThumb(res,file){
                this.imageThumb = URL.createObjectURL(file.raw);
                this.form.thumb = res;
            },
            getlisth1(){
                this.axios.get('/shop/goodslist/getlisth1').then(res=>{
                    this.listh1 =  res.data;
                })
            },
            getlisth2(id){
                this.axios.get('/shop/goodslist/getlisth2?id='+id).then(res=>{
                    this.listh2 = res.data;
                    console.log(this.listh2);
                })
            }
        },
        mounted(){
           let {h1name , h2name} =  JSON.parse(localStorage.goods);
           this.form.category = h1name +'-->'+ h2name;
          this.getlisth1();
        },
        beforeRouteLeave(to,from,next){
            let goods = JSON.parse(localStorage.getItem('goods'));
            localStorage.goods =  JSON.stringify(Object.assign(goods,this.form));
            next();
        },
        watch:{
            'form.relative1'(newv,oldv){
                this.getlisth2(this.form.relative1);
            }
        },
    }
</script>

<style scoped>
    .avatar-uploader{
        float: left;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
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
    .box h1{
        border-top: 3px solid  #323f49;;
        line-height: 2.5;
        font-size: 24px;
        letter-spacing: 1px;
        color: #4f5b64;
    }

    .box1{
        width: 484px;
        height: 374px;
        border-radius: 4px;
        float: left;
        margin-right: 60px;
    }
    .box1 h1{
        line-height: 2.5;
        width: 201px;
        font-size: 24px;
        letter-spacing: 1px;
        color: #4f5b64;
    }
    .box1 ul{
        background-color: #f3faff;
    }
    .el-radio{
        margin: 20px 0 20px 30px!important;
    }
</style>