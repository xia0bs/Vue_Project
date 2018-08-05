<template>
    <div class="loading">
        <img src="./loading.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .loading{
        display: flex;
        justify-content: center;
    }
   .loading > img{
       width: 1.5rem;
       height: 1.5rem;
   }
</style>