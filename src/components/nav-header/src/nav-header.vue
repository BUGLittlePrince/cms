<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-caret-right' : 'el-icon-caret-left'"
      @click="handleClickFold"
    ></i>
    <div class="content">
      <div>
        <hh-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HhBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  // 发送事件
  components: {
    UserInfo,
    HhBreadcrumb
  },

  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleClickFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 获取面包屑上面的数据，computed为了动态绑定数据，刷新数据
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleClickFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .fold {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
}
</style>
