import { Resolution } from "./common"
import { SubtitlesLayer, VideoLayer } from "./video"

/* eslint-disable camelcase */
export type ClipRequestOptions = {
  metadata?: object
  share?: boolean
  title?: String
}

export type ClipEncodeConfig = ClipRequestOptions & {
  clip: { id: any, resolution?: Resolution, volume?: Number }
  layers: Array<VideoLayer>
}

export type ComposableClipLayer = SubtitlesLayer & {
  type: string
}
/* eslint-enable camelcase */
