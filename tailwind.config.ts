import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'secondary1': '#10002B',
      'primary': '#743990',
      'secondary2': '#240046',
      'secondary3': '#3C096C',
      'mainWhite': '#FBFAFF',
      'secondaryWhite': '#EBD9FC',
      'orange': '#FF6200'

    },
    fontFamily: {
      greycliff: [ 'Greycliff CF'],
      stapel: ['Stapel']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        'button': '20px',
      },
      gridTemplateColumns: {
        'main': '0.6fr, 1fr',
      }
    }
  },
  plugins: [],
}
export default config
