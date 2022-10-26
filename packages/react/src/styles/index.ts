import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@deliverits-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
})
