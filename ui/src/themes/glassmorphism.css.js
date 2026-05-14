const stylesheet = `
.react-jinke-music-player-main svg:active,
.react-jinke-music-player-main svg:hover {
  color: #60a5fa;
}

.react-jinke-music-player-main .music-player-panel {
  background: rgba(17, 24, 39, 0.72) !important;
  backdrop-filter: blur(18px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 22px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 60px rgba(59, 130, 246, 0.08) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
  background-color: #60a5fa;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.08);
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
  box-shadow: 0 0 2px #60a5fa;
}

.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
}

.react-jinke-music-player-main .audio-item.playing svg {
  color: #60a5fa;
}

.react-jinke-music-player-main .audio-item.playing .player-singer {
  color: #60a5fa !important;
}

.audio-lists-panel-content .audio-item.playing,
.audio-lists-panel-content .audio-item.playing svg {
  color: #60a5fa;
}

.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg,
.audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
  color: #60a5fa;
}

.audio-lists-panel {
  background: rgba(17, 24, 39, 0.85) !important;
  backdrop-filter: blur(18px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 22px !important;
}

.audio-lists-panel .audio-lists-panel-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.audio-lists-panel .audio-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
}

.audio-lists-panel .audio-item:hover {
  background: rgba(255, 255, 255, 0.04) !important;
}

.audio-lists-panel .audio-item.playing {
  background: rgba(96, 165, 250, 0.08) !important;
}

.react-jinke-music-player-mobile .music-player-panel {
  border-radius: 22px 22px 0 0 !important;
}

.react-jinke-music-player-main .music-player-panel {
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: min(90%, 1200px) !important;
  bottom: 16px !important;
}
`

export default stylesheet
