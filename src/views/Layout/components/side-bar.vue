<template>
  <el-menu mode="vertical" background-color="#304156" text-color="#fff" :router="true">
    <sideBarItem v-for="(item, index) in routes" :opt="item" :key="index"></sideBarItem>
  </el-menu>
</template>

<script>
import sideBarItem from './side-bar-item'
export default {
  name: 'side-bar',
  components: {
    sideBarItem
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style scoped>
.el-menu{
  border-right: none;
}
</style>
