<template>
  <div class="login">
    <div class="login-box">
      <h1>后台管理系统</h1>
      <div class="box">
        <Form>
          <FormItem label="用户名" >
            <Input  v-model="formData.username"/>
          </FormItem>
          <FormItem label="密码">
            <Input v-model="formData.password" type="password"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleLogin" size="medium">立即登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import {Input, Form, FormItem, Button} from 'element-ui'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    Input,
    Form,
    FormItem,
    Button
  },
  methods: {
    handleLogin () {
      axios.post('/api/admin/adminUser/login', this.formData).then(res => {
        if (res.data.code === 200) {
          this.$router.push('/layout/index')
        } else {
          alert('用户名密码错误')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss" src="./index.scss">

</style>
