<template>
  <div ref="bodyAnimation"></div>
</template>

<script>
import lottie from 'lottie-web'
import plant from '@/animations/plant0.json'
export default {
  data() {
    return {}
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.bodyAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: plant
    })
  }
}
</script>

<style></style>
