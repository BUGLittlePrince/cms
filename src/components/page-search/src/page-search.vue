<template>
  <div class="page-search">
    <hh-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="footer">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </hh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HhForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HhForm
  },
  setup(props) {
    // 1.双向绑定的属性应该是由配置文件的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref({ formOriginData })

    // 2.当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped lang="less">
.hh-form {
  .header {
    color: #333;
    font-size: 30px;
  }
  .footer {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
