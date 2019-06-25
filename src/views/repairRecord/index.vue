<template>
  <div class="repair-warp">
    <el-card>
      <div slot="header">
        <h2 class="title">所有维修记录</h2>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="维修标题"
          width="80px">
        </el-table-column>
        <el-table-column
          prop="repair_time"
          label="报修时间"
          width="80px">
        </el-table-column>
        <el-table-column
          prop=""
          label="维修完成时间"
          width="80">
        </el-table-column>
        <el-table-column
          prop="connect_man"
          label="报修人"
          width="80">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="报修人电话"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="报修地址"
          width="80">
        </el-table-column>
        <el-table-column
          prop="content"
          label="报修内容"
          width="80">
        </el-table-column>
        <el-table-column
          prop="imgs"
          label="报修图片"
          width="80">
        </el-table-column>
        <el-table-column
          prop="done_imglist"
          label="报修完成图片"
          width="80">
        </el-table-column>
        <el-table-column
          prop="repair_man.nickname"
          label="报修人员"
          width="80">
        </el-table-column>
        <el-table-column
          prop="date"
          label="状态"
          width="80">
        </el-table-column>
        <el-table-column
          prop="date"
          label="待维修"
          width="80">
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="100px">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status == 1"
              type="primary"
              size="mini"
              @click="handleDispatch(scope.row._id)"
            >派单操作</el-button>
            <el-button
              type="primary"
              size="mini"
              v-if="scope.row.status == 1 || scope.row.status == 2"
            @click="handleDone(scope.row._id)"
            >已完成</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleDispatch (id) {},
    getData () {
      this.$axios.get('/admin/repairRecord?page=1&order_list=[]').then(res => {
        this.tableData = res.data
        console.log(res.data)
      })
    },
    handleDone (id) {}
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>
</style>
