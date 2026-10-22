import { assetUrl } from '../../utils/paths.js'

const videoPath = (filename) => assetUrl(`videos/${filename}`)

const videos = [
  { src: videoPath("Demoreel.mp4") }
]

export default videos
