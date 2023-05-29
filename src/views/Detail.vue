<template>
  <div id="detail">
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >实时画面</van-divider
    >
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(tea, index) in teas" :key="index">
        <img :src="tea" />
      </van-swipe-item>
    </van-swipe>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >环境监控</van-divider
    >
    <van-notice-bar
      color="rgb(238,10,36)"
      left-icon="warning-o"
      text="检测到虫害"
    />
    <van-cell-group id="warn" inset>
      <van-cell title="病虫害名称" label="茶云纹叶枯黄病">
        <template #right-icon>
          <van-icon color="#1989fa" name="search" class="search-icon" />
          <span style="color: #1989fa">查看详情</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div id="watch">
      <van-circle
        v-model="currentRate"
        rate="66"
        :color="gradientColor"
        text="湿度 66%"
        size="30vw"
      />
      <van-cell-group inset>
        <van-cell title="温度" value="25℃" />
        <van-cell title="光照" value="0.7" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import badtea1 from '@/assets/pictures/badtea1.jpg'
import badtea2 from '@/assets/pictures/badtea2.jpg'
export default {
  data() {
    return {
      teas: [badtea1, badtea2],
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less">
#detail {
  background-color: rgb(247, 248, 250);
}
#watch {
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  .van-cell-group {
    width: 30vw;
  }
  > * {
    margin-bottom: 5vw;
  }
}
.van-notice-bar {
  margin-bottom: 5vw;
}
#warn {
  margin-bottom: 5vw;
}
</style>
