const { emerald } = require('@tailwindcss/typography/src/styles');
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    './*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        babyYoda: "url('img/5551273.jpg')",
        stormTroopers: "url('img/storm_troopers.jpg')",
      }),
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.400'),
            '[class~="lead"]': {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.400'),
            },
            strong: {
              color: theme('colors.white'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            },
            h2: {
              color: theme('colors.white'),
            },
            figcaption: {
              color: theme('colors.gray.400'),
            },
            thead: {
              color:  theme('colors.white'),
              borderBottomColor:  theme('colors.gray.400'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.600'),
            },
          }
        }
      }),
      lineClamp: {
        10: '10',
      }
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp')
  ],
}
