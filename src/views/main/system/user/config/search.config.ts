import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    // {
    //   field: 'job',
    //   type: 'select',
    //   label: '职务',
    //   placeholder: '请选择职务',
    //   options: [
    //     { title: '总裁', value: 'president' },
    //     { title: '副总裁', value: 'vicePresident' },
    //     { title: '设计总监', value: 'designDerector' }
    //   ]
    // },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        // startPlaceholder: '开始日期',
        // endPlaceholder: '结束日期',
        placeholder: '创建时间',
        format: 'YYYY-MM-DD'
      }
    },
    {
      field: 'updateTime',
      type: 'datepicker',
      label: '更新时间',
      otherOptions: {
        // startPlaceholder: '开始日期',
        // endPlaceholder: '结束日期',
        placeholder: '更新时间',
        format: 'YYYY-MM-DD'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '5px 20px' }
  // colLayout: { span: 8 }
}
