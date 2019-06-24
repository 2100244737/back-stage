<template>
  <div class="add-user">
    <el-card>
      <div slot="header">
        <h2 class="title">添加管理员</h2>
      </div>
      <el-form style="width: 700px" label-width="90px" label-position="left">
        <el-form-item label="管路员头像">
          <uploadAvatar v-model="formData.avatar"></uploadAvatar>
        </el-form-item>
        <el-form-item label="登录用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex" placeholder="你是男孩还是女孩">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="formData.job"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handelClick">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadAvatar from '@/components/uploadAvatar'
export default {
  name: 'index',
  components: {
    uploadAvatar
  },
  methods: {
    handelClick () {
      this.$axios.post('/admin/adminUser', this.formData).then(res => {
        if (res.code === 200) {
          this.$message.success('添加管理员成功，正在跳转管理员列表')
          setTimeout(() => {
            this.$router.push('/adminUser/list')
          }, 1000)
        }
      })
    }
  },
  data () {
    return {
      formData: {
        username: '',
        avatar: '',
        nickname: '',
        password: '',
        phone: '',
        desc: '',
        sex: '',
        job: '',
        user_type: 0
      },
      sexOptions: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 0
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
