<template>
    <div class="scroll" ref="myscroll">
        <slot></slot>
        <div class="loadBox" v-if="isshow">
            <loading></loading>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import loading from '../loading/loading'
    export default {
        name: "scroll",
        props:[
           'data'
        ],
        data(){
          return {
              isshow:false
          }
        },
        methods:{
            initScroll(){
                this.scroll = new Bscroll(this.$refs.myscroll,{
                    pullDownRefresh: {
                        threshold: 50,
                        stop: 20
                    }
                });
                this.scroll.on('pullingDown',()=>{
                   this.isshow = true;
                   this.$emit('pullingDowns');
                })
            },
            finishPullingDown(){
                this.scroll && this.scroll.finishPullDown();
            },
            refresh(){
                this.scroll && this.scroll.refresh();
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.initScroll();
            })
        },
        components:{
          loading
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.finishPullingDown();
                    this.refresh();
                    this.isshow = false;
                } , 20)
            }
        }
    }
</script>

<style scoped>
    .loadBox{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
    }
</style>