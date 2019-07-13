import music from './services'
import Embed from './embed'

export default class Music extends Embed {
  constructor(props) {
    props.services = music
    super(props)
  }
}
