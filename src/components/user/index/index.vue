<template>
    <div>
        <header>
            <div class="title">
                <a href="javascript:;">
                    <!--<i class="iconfont icon-fanhui"></i>-->
                </a>
                <span>晋彤</span>
                <a href="">
                    <!--<i class="iconfont icon-gengduo"></i>-->
                </a>
            </div>

        </header>
        <section class="search">
            <span>太原 </span><i class="iconfont icon-down"></i>
            <div class="input">
                <input type="text" placeholder="搜索您需要的服务 商品">
                <img src="./static/img/sousuo.png" alt="">
            </div>
        </section>
        <section class="lunbo">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="img" v-for="item in banner" :key="item.gid">
                    <router-link :to="{name:'detail',query:{gid:item.gid}}">
                        <img :src="item.thumb" alt="">
                    </router-link>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>


        </section>
        <ul class="class">
            <li v-for="item in category">
                <router-link :to="{name:'list',query:{cid:item.id}}" :key="item.id">
                    <div class="img"></div>
                    <p>{{item.cname}}</p>
                </router-link>
            </li>
        </ul>
        <tab ></tab>

    </div>
</template>

<script>
    import Tab from '../../common/tab'

    export default {
        name: "index",
        data() {
            return {
                category: [],
                banner: [],
                swiperOption: {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    loop:true
                }
            }
        },
        computed: {

        },
        methods: {
            getData() {
                this.axios.get('/user/index').then(res => {
                    this.banner = res.data;
                })
            },
            getMenu() {
                this.axios.get('/user/index/menu').then(res => {
                    this.category = res.data.map(element => ({id: element.id, cname: element.cname})).slice(0, 9);
                })
            }
        },
        mounted() {
            this.getData();
            this.getMenu();
        },
        components: {
            Tab
        }
    }
</script>

<style scoped>
    @import url(./static/css/common.css);
    @import url(./static/css/header.css);
    @import url(./static/css/index.css);
    @import url('http://at.alicdn.com/t/font_727513_dnmah4aeq0r.css');
    @import url('http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css');
</style>