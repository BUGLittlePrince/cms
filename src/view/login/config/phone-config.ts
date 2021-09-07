export const rules = {
  num: [
    {
      required: true,
      message: '手机号是必传字段',
      trigger: 'blur'
    },
    {
      pattern:
        '^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\\d{8}$',
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,6}/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
