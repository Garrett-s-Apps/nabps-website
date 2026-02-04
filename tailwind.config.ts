import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NABPS CMYK Color Palette
        cyan: {
          DEFAULT: '#00AEEF',
          50: '#E5F7FE',
          100: '#CCEFFD',
          200: '#99DFFB',
          300: '#66CFF9',
          400: '#33BFF7',
          500: '#00AEEF',
          600: '#008BBF',
          700: '#00688F',
          800: '#004660',
          900: '#002330',
        },
        magenta: {
          DEFAULT: '#EC008C',
          50: '#FDE5F3',
          100: '#FBCCE7',
          200: '#F799CF',
          300: '#F366B7',
          400: '#EF339F',
          500: '#EC008C',
          600: '#BD0070',
          700: '#8E0054',
          800: '#5E0038',
          900: '#2F001C',
        },
        yellow: {
          DEFAULT: '#FFD200',
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFD200',
          600: '#CCA800',
          700: '#997E00',
          800: '#665400',
          900: '#332A00',
        },
        key: {
          DEFAULT: '#231F20',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#231F20',
          900: '#1A1718',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
