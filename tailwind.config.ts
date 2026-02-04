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
        // Primary Professional Palette
        navy: {
          DEFAULT: '#1E3A5F',
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1E3A5F',
          900: '#102A43',
        },
        // NABPS CMYK Accent Colors (use sparingly)
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
