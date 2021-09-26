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
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'time',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        placeholder: '创建时间',
        format: 'YYYY-MM-DD'
      }
    },
    {
      field: 'time',
      type: 'datepicker',
      label: '更新时间',
      otherOptions: {
        placeholder: '更新时间',
        format: 'YYYY-MM-DD'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '5px 20px' }
  // colLayout: { span: 8 }
}
