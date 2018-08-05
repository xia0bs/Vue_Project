<template>
    <div class="content">
    <div class="right">
    <div class="nav">
        <ul>
            <li>
                <img src="./lion.jpg" alt="" width="80">
            </li>
            <li :class="{active:index==1}"> 用户管理</li>
            <li :class="{active:index==2}">数据中心</li>
            <li :class="{active:index==3}"> 店铺管理</li>
            <li :class="{active:index==4}"> <router-link :to="{name:'manageadmission'}">审核管理</router-link> </li>
            <li :class="{active:index==5}">系统设置</li>
            <li :class="{active:index==6}">财务管理</li>
            <li >
                <div class="touxiang"></div>
                <span>管理员名称</span>
            </li>
            <li>
                <i></i>
                <span>清除缓存</span>
            </li>
            <li>
                <i></i>
                <span>退出</span>
            </li>
        </ul>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "my-header",
        props:['index'],
        data:function () {
            return{
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .content{
        width: 100%;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        background: rgba(48,163,254,0.1);
    }
    .content>.navLeft{
        width: 200px;
        height: 100%;
        background:  #1f262c;

    }
    .content>.navLeft>.picbox{
        width: 100%;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 28px;
        box-sizing: border-box;
    }
    .content>.navLeft>.picbox>.logo{
        width: 110px;
        height: 90px;
    }

    .content>.navLeft>.picbox>span{
        display: block;
        width: 164px;
        height: 19px;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #ffffff;
        text-align: center;
        margin-top: 18px;
    }
    .content>.navLeft>ul{
        width: 100%;
        height: auto;
        margin-top: 44px;
    }

    .content>.navLeft>ul>li{
        width: 100%;
        height: 107px;
        background:#1f262c ;
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 107px;
    }
    .content>.navLeft>ul>li.active{
        background:  #3a8ee6;
    }
    .content>.right{
        width: calc(100% - 200px);
        height: 100%;
        margin: 0 auto;
    }
    .content>.right>.nav{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        background: rgba(48,163,254,0.1);
    }
    .content>.right>.nav>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    .content>.right>.nav>ul>li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 60px;
        font-size: 18px;
        letter-spacing: 0;
        color: #516676;
        line-height: 60px;
    }
    .content>.right>.nav>ul>li.active{
        background: #30a3fe;
    }
    .content>.right>.nav>ul>li.active a{
        color: #ffffff;
    }
    .content>.right>.nav>ul>li > a{
        padding: 0 10px;
    }

    .content>.right>.nav>ul>li:nth-child(7){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 90px;
    }
    .content>.right>.nav>ul>li>.touxiang{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: url("lion.jpg") center/cover;

    }
    .content>.right>.nav>ul>li>span{
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
   /* .router-link-active{
        background: #3a8ee6;
        color: #ffffff;
    }*/
</style>