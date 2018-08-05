<template>
    <div>
        <my-header index="4"></my-header>
        <div class="bottom">
            <div class="left">
                <ul>
                    <li>
                        <router-link :to="{name:'manageadmissioncheck'}">待审核</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'manageadmissionchecksuccess'}">通过</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'manageadmissioncheckfail'}">未通过</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MyHeader from '../../common/headers'
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
    }
    .router-link-active{
        border-left: 3px solid #3a8ee6;
        background: #3a8ee6;

    }
</style>