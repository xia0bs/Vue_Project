<template>
    <div>
       <my-header index="1"></my-header>
    </div>
</template>

<script>
    import MyHeader from '../../common/shopheaders'
    export default {
        name: "index",
        components:{
            MyHeader
        },
        mounted(){
            if(!localStorage.isLogin){
                this.$router.push({name:'shoplogin'});
            }
        }
    }
</script>

<style scoped>

</style>