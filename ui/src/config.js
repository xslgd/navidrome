const defaultConfig = {
  version: 'dev',
  firstTime: false,
  baseURL: '',
  variousArtistsId: '63sqASlAfjbGMuLP4JhnZU',
  loginBackgroundURL: 'https://source.unsplash.com/collection/1065384/1600x900',
  maxSidebarPlaylists: 100,
  enableTranscodingConfig: true,
  enableDownloads: true,
  enableFavourites: true,
  losslessFormats: 'FLAC,WAV,ALAC,DSF',
  welcomeMessage: '',
  gaTrackingId: '',
  devActivityPanel: true,
  enableStarRating: true,
  defaultTheme: 'Glassmorphism',
  defaultLanguage: '',
  defaultUIVolume: 100,
  uiSearchDebounceMs: 200,
  uiCoverArtSize: 600,
  enableUserEditing: true,
  enableArtworkUpload: true,
  enableSharing: true,
  shareURL: '',
  defaultDownloadableShare: true,
  devSidebarPlaylists: true,
  lastFMEnabled: true,
  listenBrainzEnabled: true,
  enableExternalServices: true,
  enableCoverAnimation: true,
  enableNowPlaying: true,
  playbackReportIntervalMs: 60000,
  devShowArtistPage: true,
  devUIShowConfig: true,
  devNewEventStream: false,
  enableReplayGain: true,
  defaultDownsamplingFormat: 'opus',
  publicBaseUrl: '/share',
  separator: '/',
  enableInspect: true,
  pluginsEnabled: true,
}

let config

try {
  const appConfig = JSON.parse(window.__APP_CONFIG__)
  config = {
    ...defaultConfig,
    ...appConfig,
  }
} catch (e) {
  config = defaultConfig
}

export let shareInfo

try {
  shareInfo = JSON.parse(window.__SHARE_INFO__)
} catch (e) {
  shareInfo = null
}

export default config
