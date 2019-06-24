<template>
    <el-upload
      class="avatar-uploader"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :data="uploadData"
      :on-success="success">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</template>

<script>
import axios from 'axios'
export default {
  name: 'uploadAvatar',
  props: {
    value: String
  },
  methods: {
    success (res) {
      this.imageUrl = res.url
      this.$emit('input', res.url)
    },
    getToken () {
      axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        this.uploadData.token = res.data.data
      })
    }
  },
  data () {
    return {
      imageUrl: '',
      uploadData: {
        token: ''
      }
    }
  },
  created () {
    this.getToken()
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.imageUrl = val
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
