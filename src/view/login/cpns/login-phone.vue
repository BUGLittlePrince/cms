<template>
  <!-- <div class="login-phone"> -->
  <el-form :rules="rules" :model="phone" ref="formRef">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num" placeholder="请输入手机号" />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <div class="code">
        <el-input v-model="phone.verifyCode" />
        <el-button type="primary" class="code-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const phone = reactive({
      num: '',
      verifyCode: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const phoneLoginAction = () => {
      console.log('phoneLoginAction')
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }

    return {
      phone,
      rules,
      formRef,
      phoneLoginAction
    }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}
.code-btn {
  margin-left: 8px;
}
</style>
