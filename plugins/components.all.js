import Vue from 'vue'
import Switcher from 'v-switcher'
import 'v-switcher/dist/v-switcher.css'
import VDialog from '~/components/common/Dialog'
import MixinStore from 'vue-mixin-store'
import {
  Button,
  Row,
  Col,
  Dialog
} from 'element-ui'

Vue.component(MixinStore.FlowLoader.name, MixinStore.FlowLoader)
Vue.component(Switcher.name, Switcher)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(VDialog.name, VDialog)
Vue.component(Dialog.name, Dialog)
