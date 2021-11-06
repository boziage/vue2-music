import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  Tabs,
  TabPane,
  Checkbox,
  Link
} from 'element-ui'
const components = [
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  Tabs,
  TabPane,
  Checkbox,
  Link
]

export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
