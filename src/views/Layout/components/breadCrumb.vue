<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item  v-for="(item, index) in routes" :key="index" :to="item">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadCrumb',
  computed: {
    routes () {
      if (this.$route.path === '/adminUser/index') {
        return this.$route.matched
      } else {
        return [{meta: {title: '首页'}, path: '/adminUser/index'},
          ...this.$route.matched
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
