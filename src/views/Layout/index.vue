<template>
  <div class="layout">
    <header class="header">
      <breadCrumb class="bread"></breadCrumb>
      <h1>北京经管学院报修系统</h1>
    </header>
    <div class="side-bar">
      <side-bar></side-bar>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import sideBar from './components/side-bar'
import breadCrumb from './components/breadCrumb'
export default {
  name: 'index',
  components: {
    sideBar,
    breadCrumb
  }
}
</script>

<style scoped lang="scss" src="./index.scss">

</style>
