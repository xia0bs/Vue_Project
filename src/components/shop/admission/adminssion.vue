<template>
    <div class="box">
        <div class="toubu">
            <img src="../static/image/lion.jpg" alt="">
            <span>xsz电商平台</span>
        </div>
        <router-link :to="{name:'adminssionPross1'}" class="header">
            <img src="../static/image/admission.png" alt="">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "adminssion"
    }
</script>

<style scoped>
    html,body{
        width: 100%;
        height: 100%;
    }
    .box{
        width: 100%;
        height: 100%;
    }
    .box .header{
        width: 100%;
        height: auto;

    }
    .box img{
        width: 100%;
        height: auto;
        display: block;
    }
    .toubu{
        width: 100%;
        height: 80px;
        background-color: rgb(31,38,44);
        display: flex;
        align-items: center;
        z-index: 9999!important;
        position: fixed;
        top: 0;
        left: 0;
    }
    .toubu img {
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 50%;
        margin-left: 30px;
    }
    .toubu span{
        color: #fff;
        margin-left: 20px;
    }
</style>