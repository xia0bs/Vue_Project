<template>
    <div class="bottom">
               <div class="title">
                   <span>店铺信息</span>
                   <div style="background:#9ba9b4"></div>
                   <span>{{company.shopname}}</span>
                   <div ></div>
                   <span style="color: #29c99a;">查看</span>
               </div>
                <div class="shopContent">
                    <div class="shoptitle">
                        商家信息
                    </div>
                    <ul>
                        <li>
                            <span >公司名称 :</span>
                            <span>{{company.name}}</span>
                        </li>
                        <li>
                            <span>法人代表</span>
                            <span>{{company.legalperson}}</span>
                        </li>
                        <li>
                            <span>营业执照所在地</span>
                            <span>{{company.location}}</span>
                        </li>
                        <li>
                            <span>营业执照详细地址</span>
                            <span>{{company.address}}</span>
                        </li>
                        <li>
                            <span>成立日期</span>
                            <span>{{company.time}}</span>
                        </li>
                        <li>
                            <span>公司所在地</span>
                            <span>{{company.location}}</span>
                        </li>
                        <li>
                            <span>公司详细地址</span>
                            <span>{{company.address}}</span>
                        </li>
                    </ul>
                    <div class="shoptitle" style="margin-top: 100px">
                       店铺信息
                    </div>
                    <ul>
                        <li>
                            <span>店铺LOGO</span>
                            <img :src="company.thumb" alt="" width="100">
                        </li>
                        <li>
                            <span>店铺名称</span><span>{{company.shopname}}</span>
                        </li>
                        <li>
                            <span>店铺介绍</span><span>{{company.notice}}</span>
                        </li>
                        <li>
                            <span>店铺类型</span><span>{{company.shoptype}}</span>
                        </li>
                    </ul>
                    <div class="shoptitle" style="margin-top: 100px">
                      审核结果
                    </div>
                    <ul>
                        <li class="last">
                            <span></span>
                            <template>
                                <el-radio v-model="radio" label="1">通过</el-radio>
                                <el-radio v-model="radio" label="2">未通过</el-radio>
                            </template>
                        </li>
                        <el-button type="success" round @click="handleClick">确定</el-button>
                    </ul>
                </div>
        </div>
</template>

<script>
    import MyHeader from '../../common/headers'
    export default {
        name: "managequery",
        data(){
            return {
                radio: '1',
                sid:0,
                company:{}
            };
        },
        methods:{
           getList(sid){
               this.axios.get('/admin/check/getone?sid='+sid).then((res)=>{
                   this.company = res.data;
               })
           },
            handleClick(){
               this.axios.get('/admin/check/audit?sid='+this.sid+'&status='+this.radio).then(res=>{
                  if(res.data === 'success'){
                       this.$router.back();
                  }else if(res.data === 'fail'){
                      this.$router.back();
                  }
               })
            }
        },
        mounted:function(){
           this.sid = this.$route.query.sid;
           this.getList(this.sid);
        },
        components:{
            MyHeader
        }
    }
</script>

<style scoped>

    .bottom{
        position: absolute;
        left: 200px;
        top: 60px;
        right: 0;
        bottom: 0;
        padding: 20px;
    }
    .nav>ul{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .nav>ul>li{
        width: 200px;
        height: 60px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
        text-align: center;
        line-height: 60px;
    }
    .nav>ul>li.hot{
        background: #30a3fe;
        color: #ffffff;
    }
    .nav>ul>li:nth-child(7){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 90px;
    }
    .nav>ul>li>.touxiang{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #666666;

    }
    .nav>ul>li>span{
        display: block;
        width: 93px;
        height: auto;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
        margin-left: 15px;

    }
    .bottom>.title{
        width: 300px;
        height: 100px;
        display: flex;
        justify-content: space-between;
         align-items: center;
    }
    .bottom>.title>div{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #29c99a;
    }
    .bottom>.title>span{
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
        text-align: center;
    }
    .bottom>.shopContent{
        width: 100%;
        height: 100%;
    }
    .bottom>.shopContent>.shoptitle{
        width: auto;
        height: 25px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #41b2fc;


    }
    .bottom>.shopContent>ul{
        width: 100%;
        height: auto;
        margin-top: 38px;
    }
    .bottom>.shopContent>ul>li{
        width: 100%;
        height: auto;
       margin-bottom: 36px;
    }
    .bottom>.shopContent>ul>li>span{
        margin-right: 30px;
        color: #516676;
    }
    .bottom>.shopContent>ul>li>span:nth-child(1){
        color: #516676;
    }
  .el-button{

        width: 132px;
        height: 39px;
        border: none;
        outline: none;
        border-radius: 20px;
    }
</style>