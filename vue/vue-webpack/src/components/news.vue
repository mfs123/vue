<template>
  <div>
<el-container>
  <el-header>新闻大全</el-header>
  <el-container>
    <el-aside width="200px"><el-row class="tac">
  <el-col :span="12">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>国内</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>

          <el-menu-item index="1-3">选项3</el-menu-item>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>国外</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
      
      </el-submenu>
      
     <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>科技</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>生活</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-col>
  
</el-row></el-aside>
    <el-main >
      <div>新闻发布</div>
      <el-table :data="news">
        <el-table-column label="标题" prop="title"> </el-table-column>
        <el-table-column label="内容" prop="content"> </el-table-column>
        <el-table-column label="发布时间" prop="newsTime"> </el-table-column>
        <el-table-column label="操作">

        
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, news)">删除</el-button>
      </template>
      
            </el-table-column>


      </el-table>
    </el-main>
    
  </el-container>
</el-container>
  </div>

</template>

<script>
import axios from 'axios'

export default {
   methods: {
      // deleteRow(index, rows) {
      //   console.log(index,rows)
      //   rows.splice(index, 1);
      // }
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        row.splice(index, 1);;
      }
    },
   data () {
    return {
      news:[]
    }
  },
  
 


mounted () {
  axios({
    method:'get',
    url:"http://192.168.97.230:3000/news"
  }).then((res)=>{
    // console.log(res)
    res=res.data
    console.log(res)
    if(res.status === true){
      this.news=res.data
      // console.log(this.news)
    }
  })
}
}
</script>

<style>
  body{
  margin: 0px;
  padding: 0px;
}
.el-header{
    background-image: url(./img/timg.jpg);
    color: #333;
    text-align: center;
    height: 150px !important;
    line-height: 150px;
    font-size: 42px;
    font-style: oblique;
    color: aqua;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-image: url(../img/123123.jpg); */
    color: #333;
    text-align: center;
   line-height: 22px;
    background-size:100%;
  }
  .el-col-12 {
    width: 100% !important;
    background-color: azure;
}
  /* .el-main{
    height: 600px;
  } */

  .el-menu{
    background: #d4c4c4 !important;
}
</style>