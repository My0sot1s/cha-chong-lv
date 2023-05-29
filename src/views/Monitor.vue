<template>
  <div id="monitor">
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <operateCell
        :cell="cell"
        :index="index"
        v-for="(cell, index) in operateList"
        :key="index"
      />
    </van-list>
  </div>
</template>

<script>
import operateCell from '@/components/operateCell.vue'
export default {
  components: {
    operateCell
  },
  data() {
    return {
      operateList: [
        {
          state: 'danger',
          stateText: '虫害',
          title: '检测到虫害',
          detail: '茶云纹叶枯黄病',
          time: '2022-10-15 17:39'
        },
        {
          state: 'success',
          stateText: '健康',
          title: '农地状态良好',
          detail: '',
          time: '2022-10-15 17:35'
        },
        {
          state: 'primary',
          stateText: '缺水',
          title: '农地缺水',
          detail: '湿度: 15%',
          time: '2022-10-15 17:35'
        },
        {
          state: 'warning',
          stateText: '缺肥',
          title: '农地缺少肥料',
          detail: '',
          time: '2022-10-15 17:30'
        },
        {
          state: 'success',
          stateText: '健康',
          title: '农地状态良好',
          detail: '',
          time: '2022-10-15 17:31'
        }
      ],
      value1: 0,
      value2: 'a',
      option1: [
        { text: '所有地块', value: 0 },
        { text: '健康地块', value: 1 },
        { text: '虫害地块', value: 2 },
        { text: '缺水地块', value: 3 },
        { text: '缺肥地块', value: 4 }
      ],
      option2: [
        { text: '排序方式', value: 'a' },
        { text: '时间排序', value: 'b' },
        { text: '危险排序', value: 'c' }
      ],
      loading: false,
      finished: true
    }
  }
}
</script>

<style scoped>
#monitor {
  background-color: rgb(247, 248, 250);
}
.van-list {
  width: 100vw;
  margin: 3vw 0vw;
}
</style>
