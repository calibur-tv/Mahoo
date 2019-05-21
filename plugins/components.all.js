import Vue from 'vue'
import Switcher from 'v-switcher/dist/v-switcher.vue'
import VDialog from '~/components/common/Dialog'
import FlowLoader from 'vue-mixin-store/dist/FlowLoader'
import {
  Button,
  Row,
  Col,
  Dialog
} from 'element-ui'

Vue.use(Switcher)
Vue.use(FlowLoader)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(VDialog.name, VDialog)
Vue.component(Dialog.name, Dialog)
