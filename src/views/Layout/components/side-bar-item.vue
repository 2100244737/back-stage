<template>
  <div>
    <el-submenu :index="opt.path" v-if="opt.children && !opt.hidden">
      <template slot="title">{{opt.meta.title}}</template>
      <side-bar-item v-for="(item, index) in opt.children" :key="index"  :opt="item"></side-bar-item>
    </el-submenu>
    <el-menu-item v-if="!opt.children && !opt.hidden">
      {{opt.meta.title}}
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'side-bar-item',
  props: {
    opt: Object
  }
}
</script>

<style scoped>

</style>
