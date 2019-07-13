import video from './services'
import Embed from './embed'

export default class Video extends Embed {
  constructor(props) {
    props.services = video
    super(props)
  }
}
