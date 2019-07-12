import { music } from './services'
import Embed from './embed'

export default class Music extends Embed {
  constructor(props) {
    console.log('new music')
    props.services = music
    super(props)
  }
}
