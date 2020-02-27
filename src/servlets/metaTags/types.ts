export enum MetaTagFormat {
  Default,
  Track,
  Collection,
  User,
  Upload,
  Error
}

export enum Playable {
  TRACK = 'track',
  PLAYLIST = 'playlist',
  ALBUM = 'album'
}

export interface Context {
  title: string,
  description: string,
  image: string,
  // Whether or not the image shows as a small thumbnail version
  thumbnail?: boolean,

  // Whether or not to show an embed player
  embed?: boolean,
  // Bedtime player url
  embedUrl?: string,
}
