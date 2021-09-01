<template>
  <div>
    <h2>login : {{ $store.state.name }}</h2>
    <el-button type="success">登录</el-button>
    <el-button type="primary">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  name: 'Login'
})
</script>

<style scoped></style>
