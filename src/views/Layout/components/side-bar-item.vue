<template>
  <div>
    <el-submenu :index="opt.path" v-if="opt.children && !opt.hidden">
      <template slot="title" class="list">
        <i class="iconfont" :class="opt.meta.icon"></i>
        {{opt.meta.title}}</template>
      <side-bar-item v-for="(item, index) in opt.children" :key="index" :parent-url="opt.path" :opt="item"></side-bar-item>
    </el-submenu>
    <el-menu-item :index="itemIndex" v-if="!opt.children && !opt.hidden">
      <template class="list">
        <i class="iconfont" :class="opt.meta.icon"></i>
        {{opt.meta.title}}
      </template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'side-bar-item',
  props: {
    opt: Object,
    parentUrl: String
  },
  computed: {
    itemIndex () {
      if (this.parentUrl) {
        return this.parentUrl + '/' + this.opt.path
      } else {
        return this.opt.path
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .iconfont {
      font-size: 25px;
      padding-right: 8px;
    }
</style>
