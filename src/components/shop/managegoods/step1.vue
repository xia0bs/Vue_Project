<template>

    <div>
        <div> {{h1name + h2name}} </div>
       <div class="box">
           <h1> 请选择第一级类别</h1>
           <ul>
              <li>
                  <el-radio-group v-model="form.h1" style="display: flex;flex-direction: column">
                     <el-radio v-for="item in listh1" :label="item.id"  :key="item.id">{{item.cname}}</el-radio>
                  </el-radio-group>
              </li>
           </ul>
       </div>
        <div class="box">
            <h1> 请选择第二级类别</h1>
            <ul>
                <el-radio-group v-model="form.h2" style="display: flex;flex-direction: column">
                    <el-radio v-for="item in listh2" :label="item.id"  :key="item.id">{{item.cname}}</el-radio>
                </el-radio-group>
            </ul>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
        name: "step1",
        data:function(){
            return {
                listh1:[],
                listh2:[],
                form:{
                    h1:'',
                    h2:'',
                },
            }
        },
        computed:{
            h1name(){
                let data = this.listh1.filter(element=>element.id == this.form.h1)[0];
                return data?data['cname']:'';
            },
            h2name(){
                let data = this.listh2.filter(element=>element.id == this.form.h2)[0];
                return data?data['cname']:'';
            }
        },
        methods:{
            getlisth1(){
                this.axios.get('/shop/goodslist/getlisth1').then(res=>{
                    this.listh1 =  res.data;
                })
            },
            getlisth2(id){
                this.axios.get('/shop/goodslist/getlisth2?id='+id).then(res=>{
                    this.listh2 = res.data;
                })
            }
        },
        mounted(){
            this.getlisth1();
        },
        watch:{
            'form.h1'(newv,oldv){
                this.getlisth2(this.form.h1);
            }
        },
        beforeRouteLeave(to,from,next){
            let that = this;
            let obj = Object.assign(this.form,{h1name:that.h1name , h2name:that.h2name});
            localStorage.goods =JSON.stringify(obj);
            next();
        }
    }
</script>

<style scoped>
   .box{
       width: 484px;
       height: 374px;
       border-radius: 4px;
       float: left;
       margin-right: 60px;
   }
   .box h1{
       line-height: 2.5;
       width: 201px;
       font-size: 24px;
       letter-spacing: 1px;
       color: #4f5b64;
   }
    .box ul{
        background-color: #f3faff;
    }
   .el-radio{
       margin: 20px 0 20px 30px!important;
   }
</style>