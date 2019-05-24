import Vue from 'vue'
import Switcher from 'v-switcher/dist/v-switcher'
import VDialog from '~/components/common/Dialog'
import FlowLoader from 'vue-mixin-store/dist/FlowLoader'
import {
  Button,
  Row,
  Col,
  Dialog,
  Form,
  FormItem,
  Input,
  Checkbox
} from 'element-ui'

Vue.component(Switcher.name, Switcher)
Vue.component(FlowLoader.name, FlowLoader)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)
Vue.component(VDialog.name, VDialog)
Vue.component(Dialog.name, Dialog)
