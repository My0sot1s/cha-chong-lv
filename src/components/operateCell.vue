<template>
  <div id="operateCell">
    <van-cell-group inset>
      <van-cell>
        <template #title>
          <van-tag round :type="cell.state">{{ cell.stateText }}</van-tag>
          <span style="margin-left: 2vw">{{ index + 1 + '号农地' }}</span>
        </template>
        <template #right-icon>
          <span style="color: #bbb">{{ cell.time }}</span>
        </template>
      </van-cell>
      <van-cell :title="cell.title" :label="cell.detail">
        <template #right-icon>
          <span style="color: #1989fa" @click="$router.push('/detail')"
            >查看详情</span
          >
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: ['cell', 'index']
}
</script>

<style>
#operateCell {
  margin-bottom: 2vw;
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>
