import { defineTheme } from 'pinceau'

// https://pinceau.dev/configuration/tokens-config
export default defineTheme({
  media: {
    mobile: '(max-width: 771px)',
    tablet: '(max-width: 981px)',
    desktop: '(max-width: 1920px)',
  },
  color: {
    white: '#FFF',
    vue: {
      blue: '#35495E',
      green: '#42B983',
    },
    typescript: {
      blue: '#3178C6',
    },
    sponsor: {
      platinum: '#93AF5E',
      gold: '#FFC408',
      silver: '#ADBFD4',
      bronze: '#F17C67',
    },
  },
  fontSize: {
    base: '0.0625rem',
  },
  space: {
    8: '8px',
  },
})
