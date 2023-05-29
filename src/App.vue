<template>
  <div id="app">
    <van-nav-bar fixed placeholder :title="$route.name"
      ><template #left> <van-icon name="manager-o" size="18" /> </template
      ><template #right> <van-icon dot name="service-o" size="18" /> </template
    ></van-nav-bar>
    <router-view />
    <van-tabbar fixed placeholder v-model="active">
      <van-tabbar-item icon="home-o" :to="'/home'">首页</van-tabbar-item>
      <van-tabbar-item icon="description" :to="'/monitor'"
        >监控</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" :to="'/setting'">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
