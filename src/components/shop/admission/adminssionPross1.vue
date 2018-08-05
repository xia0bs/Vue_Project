<template>
    <div>
        <img src="../static/image/numberOne.png" alt="" class="tupian1">
    </div>
</template>

<script>
    export default {
        name: "adminssionPross1"
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
    }
    .box .left{
        width: 180px;
        height: 90%;
    }
    .box .left img {
        width: 80px;
        height: 80px;
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
    .buttonNext{
        width: 160px;
        border-radius: 5%;
        background-color: rgba(32, 255, 47, 0.71);
        margin:12px 40%;
        float: right;
    }
</style>