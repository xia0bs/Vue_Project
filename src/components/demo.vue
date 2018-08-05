<template>
    <div class="box">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="省份">
                <el-select v-model="form.province" placeholder="省份">
                    <el-option v-for="(item,$index) in province" :label="item" :value="item" :key="$index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市">
                <el-select v-model="form.city" placeholder="城市">
                    <el-option v-for="(item,$index) in filterCity" :label="item" :value="item" :key="$index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="地区">
                <el-select v-model="form.district" placeholder="地区">
                    <el-option v-for="(item,$index) in filterDistrict" :label="item" :value="item" :key="$index"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data(){
            return {
                form:{
                    province:'',
                    city:'',
                    district:''
                },
                data:[

                ]
            }
        },
        computed:{
            province(){
                let arr =  this.data.map(element=>element['province_name']);
                arr = Array.from(new Set(arr));
                return arr;
            },
            filterCity(){
                let arr =  this.data.filter(element=>element['province_name'] == this.form.province);
                arr =  arr.map(element=>element['city_name']);
                arr = Array.from(new Set(arr));
                return arr ;
            },
            filterDistrict(){
                let arr =  this.data.filter(element=>element['city_name'] == this.form.city);
                arr =  arr.map(element=>element['district_name']);
                return arr;
            },
        },
        methods:{
            onSubmit(){
                console.log(this.province);
            },
            getData(){
                this.axios.get('/shop/admission/data').then(res=>{
                    this.data =  res.data;
                })
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style scoped>
    .box{
        width: 1000px;
        height: auto;
        min-height: 300px;
        border: 1px solid #999;
        margin: 0 auto;
    }
</style>