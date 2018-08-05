<template>
    <div ref="scroll" class="scroll">
        <div v-if="isLoading">
            <!--<loading></loading>-->
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    // import loading from '../common/loading/loading'

    export default {
        name: "scroll",
        props: {
            data: {
                type: Array,
                default: null
            },
            scrollX: {
                type: Boolean,
                default: false,
            },
            scrollY: {
                type: Boolean,
                default: true
            },

        },
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            _initScroll() {
                if (!this.$refs.scroll) {
                    return
                }
                this.scroll = new BScroll(this.$refs.scroll,{
                    pullDownRefresh: {
                        threshold: 50,
                        stop: 20
                    }
                });
                this.scroll.on('pullingDown', () => {
                    this.isLoading = true;
                    this.$emit('pullingDowns');
                })

            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initScroll();
            })
        },
        watch: {
            data() {
                setTimeout(() => {
                    this.isLoading = false;
                    this.scroll.finishPullDown()
                    this.scroll.refresh();
                }, 20)
            }
        },
        components: {

        }
    }
</script>

<style scoped>
.scroll{
    width: 100%;
    height: 100%;
}
</style>