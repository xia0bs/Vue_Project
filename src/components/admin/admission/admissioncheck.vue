<template>
            <div class="right">
                <div class="title">待审核列表</div>
                <input type="text" v-model="search" @keydown.enter="searchData">
                  <el-table :data="table">
                      <el-table-column
                              prop="sid"
                              label="SID"
                              width="180">
                      </el-table-column>
                      <el-table-column
                              prop="shopname"
                              label="店铺名称"
                              width="180">
                      </el-table-column>
                      <el-table-column
                              prop="time"
                              label="入驻时间"
                              width="180">
                      </el-table-column>
                      <el-table-column
                              prop="thumb"
                              label="缩略图"
                              width="180">
                          <template slot-scope="scope">
                              <img :src="scope.row.thumb" alt="" width="80">
                          </template>
                      </el-table-column>
                      <el-table-column
                              prop="status"
                              label="状态"
                              width="180">
                      </el-table-column>
                      <el-table-column label="操作">
                          <template slot-scope="scope">
                              <router-link :to="{name:'manageadmissionquery',query:{sid:scope.row.sid}}" tag="el-button" class="el-button el-button--success el-button--mini">编辑</router-link>
                              <el-button
                                      size="mini"
                                      type="danger"
                                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                          </template>
                      </el-table-column>
                  </el-table>

                <div>
                    <el-pagination
                            background
                            :page-size="3"
                            layout="prev, pager, next , jumper"
                            :total="total"
                            @current-change="handleCurrentChange"
                    >
                    </el-pagination>
                </div>
            </div>

</template>

<script>
    export default {
        name: "managecheck",
        data() {
            return {
               table:[],
               total:10,
               currentPage:0,
                search:''
            }
        },
        methods:{
            searchData(){
               this.currentPage = 1;
               this.getData();
            },
            getData(){
                this.axios.get('/admin/check/shoplist?status=3&page='+this.currentPage+'&search='+this.search).then(res=>{
                   this.table = res.data.data;
                   this.total = res.data.total;
                })
            },
            handleDelete(index,row){
                 let sid = row.sid;
                 this.axios.get('/admin/check/deleteshop?sid='+sid).then((res)=>{

                     if(res.data === 'success'){
                         this.$message({
                             message:'店铺删除成功',
                             type:'success'
                         });
                        this.table = this.table.filter(element=>element.sid!=sid);
                     }else if(res.data === 'fail'){
                         this.$message({
                             message:'店铺删除失败',
                             type:'error'
                         })
                     }
                 })
            },
            handleCurrentChange(val){
                this.currentPage = val;
            }

        },
        watch:{
          currentPage(val){
              this.getData()
          }
        },
        mounted:function(){
           this.currentPage = 1;
        },

    }
</script>

<style scoped>

  .right{
      position: absolute;
      left:200px;
      right: 0;
      top: 60px;
      bottom: 0;
      padding: 10px;
  }
  .bottom .title{
      width: 100%;
      height: 100px;
      line-height: 100px;
      font-size: 18px;
      color: #516676;
  }
  .btn{
      width: 462px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-top: 114px;
  }
  .btn>span{
      display: block;
      width: 80px;
      height: 18px;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 1px;
      color: #566168;
  }
  .btn button{

      width: 132px;
      height: 39px;
      background: #f95c2c ;
      border: none;
      outline: none;
      border-radius: 20px;
  }
  .page{
      width: 400px;
      height: 100px;
      background: #3a8ee6;
      position: absolute;
      right: 20px;
      bottom: 100px;
  }

</style>