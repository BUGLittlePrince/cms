import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
} from 'element-plus/lib/components'

const components = [
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
