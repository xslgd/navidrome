import { useSelector } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import themes from './index'
import { AUTO_THEME_ID } from '../consts'
import config from '../config'
import { useEffect } from 'react'

const useCurrentTheme = () => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  const theme = useSelector((state) => {
    if (state.theme === AUTO_THEME_ID) {
      return prefersLightMode ? themes.LightTheme : themes.GlassmorphismTheme
    }
    const themeName =
      Object.keys(themes).find((t) => t === state.theme) ||
      Object.keys(themes).find(
        (t) => themes[t].themeName === config.defaultTheme,
      ) ||
      'GlassmorphismTheme'
    return themes[themeName]
  })

  useEffect(() => {
    const styles = document.getElementsByTagName('style')
    let style
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].id === 'nd-player-style-override') {
        style = styles[i]
      }
    }
    if (theme.player.stylesheet) {
      if (style === undefined) {
        style = document.createElement('style')
        style.id = 'nd-player-style-override'
        style.innerHTML = theme.player.stylesheet
        document.head.appendChild(style)
      } else {
        style.innerHTML = theme.player.stylesheet
      }
    } else {
      if (style !== undefined) {
        document.head.removeChild(style)
      }
    }

    if (theme.themeName === 'Glassmorphism') {
      document.body.style.background = `
        radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 35%),
        radial-gradient(circle at bottom right, rgba(168,85,247,0.12), transparent 35%),
        linear-gradient(135deg, #0f172a, #111827)
      `
      document.body.style.backgroundAttachment = 'fixed'
    } else {
      const isDark = theme.palette?.type === 'dark'
      const bgColor =
        theme.palette?.background?.default || (isDark ? '#303030' : '#fafafa')
      document.body.style.background = bgColor
      document.body.style.backgroundAttachment = ''
    }
  }, [theme])

  return theme
}

export default useCurrentTheme
