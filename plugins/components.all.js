import Vue from 'vue'
import Switcher from 'v-switcher'
import 'v-switcher/dist/v-switcher.css'
import VDialog from '~/components/common/Dialog'
import VueMixinStore from 'vue-mixin-store'
import {
  Button,
  Row,
  Col,
  Dialog,
  Form,
  FormItem,
  Input,
  Checkbox,
  Tag
} from 'element-ui'

Vue.component(Switcher.name, Switcher)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Form.name, Form)
Vue.component(Tag.name, Tag)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)
Vue.component(VDialog.name, VDialog)
Vue.component(Dialog.name, Dialog)
