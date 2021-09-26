<template>
  <div class="page-content">
    <hh-table
      :listData="pageListData"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <!-- 1.header里面的插槽 -->
      <template #headerHandler>
        <el-button size="mini" icon="el-icon-circle-plus" type="primary"
          >新建用户</el-button
        >
        <el-button size="mini" icon="el-icon-refresh" type="success"
          >刷新</el-button
        >
        <el-button size="mini" icon="el-icon-delete" type="danger"
          >删除</el-button
        >
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btn">
          <el-button icon="el-icon-edit" size="mini" type="primary"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="danger"
            >删除</el-button
          >
        </div>
      </template>
    </hh-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import HhTable from '@/base-ui/table'

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HhTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const pageListData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // 分页码
    // const userCount = computed(() => store.state.system.userCount)
    const selectionChange = (value: any) => {
      console.log(value)
    }
    return {
      pageListData,
      selectionChange
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
