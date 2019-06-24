<template>
  <div class="admin-list">
    <el-card>
      <div slot="header">
        <h2 class="title">管理员列表</h2>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          label="用户头像"
          prop="avatar"
          width="100">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar-img" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="job"
          label="职位">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row._id)">删除</el-button>
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
    getData () {
      this.$axios.get('/admin/adminUser?user_type=0&page=1').then(res => {
        this.tableData = res.data
      })
    },
    handleDelete (id) {
      this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete(`/admin/adminUser/${id}`).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getData()
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.avatar-img {
  height: 80px;
  width: 80px;
}
</style>
