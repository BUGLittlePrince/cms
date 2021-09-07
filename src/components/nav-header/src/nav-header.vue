<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-caret-right' : 'el-icon-caret-left'"
      @click="handleClickFold"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // 发送事件
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleClickFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleClickFold
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
