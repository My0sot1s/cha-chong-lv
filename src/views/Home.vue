<template>
  <div
    id="home"
    class="animate__animated animate__fadeIn animate__faster 500ms"
  >
    <van-notice-bar
      left-icon="volume-o"
      text="为您检测到一号种植场茶树出现虫害，是否立刻前往处理？"
    />
    <van-divider />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(tea, index) in teas" :key="index">
        <img :src="tea" />
        <div class="page">{{ `${index + 1}号种植场` }}</div>
      </van-swipe-item>
    </van-swipe>
    <van-divider />
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(tag, index) in tags"
        :key="index"
        :icon="tag.icon"
        :text="tag.name"
      />
    </van-grid>
  </div>
</template>

<script>
import tea1 from '@/assets/pictures/tea1.jpg'
import tea2 from '@/assets/pictures/tea2.jpg'
import tea3 from '@/assets/pictures/tea3.jpg'
import tea4 from '@/assets/pictures/tea4.jpg'
export default {
  data() {
    return {
      teas: [tea1, tea2, tea3, tea4],
      tags: [
        {
          name: '病虫害识别',
          icon: 'aim'
        },
        {
          name: '地块管理',
          icon: 'apps-o'
        },
        {
          name: '农事操作',
          icon: 'cluster-o'
        },
        {
          name: '灌溉操作',
          icon: 'flower-o'
        },
        {
          name: '待办事项',
          icon: 'notes-o'
        },
        {
          name: '专家问答',
          icon: 'manager-o'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.my-swipe .van-swipe-item {
  position: relative;
  color: #fff;
  font-size: 20px;
  text-align: center;
  > img {
    width: 375px;
    height: 200px;
  }
  .page {
    position: absolute;
    right: 2vw;
    bottom: 2vw;
    color: white;
    font-size: 8vw;
  }
}
</style>
