export default {
  name: 'default',
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  colors: {
    primary: '#000000',
    darkText: '#333333',
    secondary: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
    lightGray: '#F7F7F7'
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif"
    },
    sizes: {
      tiny: '0.8rem',
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
    }
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 360px)'
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem'
  },
  sizes: {
    max: '96rem',
    content: '80rem'
  }
} as const
