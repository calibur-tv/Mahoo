import Vue from 'vue'
import Switcher from 'v-switcher'
import 'v-switcher/dist/v-switcher.css'
import VueMixinStore from 'vue-mixin-store'
import { Button, Row, Col, Form, FormItem, Input, Tag } from 'element-ui'
import lazyload from '~/directives/lazyload'
import share from '~/directives/share'
import Image from '~/components/common/Image'

Vue.use(lazyload)
Vue.use(share)
Vue.component(Image.name, Image)
Vue.component(Switcher.name, Switcher)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
