<template>
    <div>
        <my-header index="2"></my-header>
        <div class="bottom">
            <div class="left">
                <ul>
                    <li>
                        <router-link :to="{name:'managecategory'}">分类管理</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'goodslist'}">商品列表</router-link>
                    </li>

                    <li>
                        <router-link :to="{name:'usercommit'}">用户评价</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MyHeader from '../../common/shopheaders'
    export default {
        name: "admission",
        components:{
            MyHeader
        }
    }
</script>

<style scoped>
    .left{
        width: 200px;
        height: calc(100% - 60px);
        position: absolute;
        left: 0;
        top: 60px;
        background:#1f262c;
    }
    .left a{
        display: flex;
        color: #ffffff;
        line-height: 2.5;
        text-decoration: none;
        font-size: 20px;
    }
    .router-link-active{
        border-left: 3px solid #3a8ee6;
        background: #3a8ee6;

    }
</style>