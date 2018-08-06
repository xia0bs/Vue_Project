<template>
    <div>
        <!--header开始-->
        <header>
            <div class="title">
                <i class="iconfont icon-fanhui"></i>
                <span>晋彤</span>
                <i></i>
            </div>
        </header>
        <!--header结束-->

        <!--banner开始-->
        <section class="wsq-banner" ref="bannerScroll">
            <div class="wsq-title">
                <div :class="['wsq-cateaty',item.id==cid?'hot':'']" v-for="item in category1" :key="item.id">
                    <router-link :to="{name:'list',query:{cid:item.id}}">
                        {{item.cname}}
                    </router-link>
                </div>
            </div>
        </section>
        <!--banner结束-->

        <!--Icon开始-->
        <div class="xrBox" ref="xrBoxScroll">
            <ul class="xrIcon">
                <router-link tag="li" class="xrIconbox" v-for="(item , index) in category2" :key="item.id"
                             :to="{name:'list',cid:item.id}">
                    <div :class="'xrIcon'+(index%4+1)">
                        <img :src="'/images/Tnine/Tnine'+(index%4+1)+'.png'" alt="">
                    </div>
                    <span>{{item.cname}}</span>
                </router-link>
            </ul>
        </div>

        <!--Icon结束-->

        <!--xrTitle开始-->
        <div class="xrTitle">
            <div class="xrContent">
                <div class="xrDot"></div>
                <div class="xrText"><span>全部</span>服务</div>
            </div>
        </div>
        <!--xrTitle结束-->
         <!--<div class="loadBox" v-if="isshow">
             <loading></loading>
         </div>-->

        <scroll class="bag-scroll"
           :data ="list"
           @pullingDowns = 'getList'
        >
            <div class="sk-bag-scroll">
                <ul class="bag-item" v-for="item in list">
                    <li class="sk-bag-photo">
                        <img :src="item.thumb" alt="">
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.name}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>服饰内外污渍清洗，去霉杀菌，不包含补色补伤</p>
                        </div>
                        <div class="sk-estimate_sale_price">
                            <ul class="sk-estimate sk-item">
                                <li class="dot"></li>
                                <li class="text">好评</li>
                                <li class="number">90<span>%</span></li>
                            </ul>
                            <ul class="sk-sale sk-item">
                                <li class="dot"></li>
                                <li class="text">月售</li>
                                <li class="number">278</li>
                            </ul>
                            <ul class="sk-price">
                                <li>60元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="./static/img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </ul>
            </div>
        </scroll>
        <!--bag开始-->
        <!--bag结束-->
        <tab></tab>

    </div>
</template>


<script>
    import Tab from '../../common/tab'
    import BScroll from 'better-scroll'
    import Scroll from '../../common/scroll/scroll'
    export default {
        name: "list",
        data() {
            return {
                scroll: null,
                category1: [],
                category2: [],
                cid: 0,
                page: 0,
                totalPage: 0,
                list: [],
                // isshow:false
            }
        },
        methods: {
            initScroll() {
                this.bannerScroll = new BScroll(this.$refs.bannerScroll, {
                    eventPassthrough: 'vertical',
                    scrollX: true
                });
                this.xrBoxScroll = new BScroll(this.$refs.xrBoxScroll, {
                    eventPassthrough: 'vertical',
                    scrollX: true
                })
            },
            getCategory() {
                this.axios.get('/user/index/menu').then(res => {
                    let category = res.data;
                    this.category1 = category.map(element => ({id: element.id, cname: element.cname}));
                    let currentCategory = category.filter(element => element.id == this.cid)[0];
                    this.category2 = currentCategory.children;
                })
            },
            getList() {
                if (this.page > this.totalPage) {
                    return;
                }
                this.page++;
                this.axios.get('/user/index/list', {
                    params: {
                        cid: this.cid,
                        page: this.page
                    }
                }).then(res => {
                    if (!this.totalPage) {
                        this.totalPage = res.data.totalPage
                    }
                    this.list.unshift(...res.data.list);
                })
            },
           /* finishPullDown(){
                this.scroll && this.scroll.finishPullDown()
            },
            refresh(){
                this.scroll && this.scroll.refresh();
            }*/
        },
        mounted() {
            this.cid = this.$route.query.cid;
            this.getCategory();
            this.getList();

            this.$nextTick(()=>{
                this.initScroll();
            })
        },
        components: {
            Tab,
            Scroll
        },
        watch: {
            $route() {
                this.cid = this.$route.query.cid;
                this.getCategory();
                this.list = [];
                this.page = 0;
                this.getList();
            },
            /*list(){
                setTimeout(()=>{
                    this.finishPullDown();
                    this.refresh();
                    this.isshow = false;
                } , 20);
            }*/
        }

    }
</script>
<style scoped>
    @import url(./static/css/Tnine.css);
    @import url('http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css');



</style>