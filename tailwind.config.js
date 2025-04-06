/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'common-home-searchbar': '#805AF1',
        'common-home-header-background': '#FFFFFF',
        'common-container-presentCard': '#FFFFFF',
        'common-tabbar': '#FFFFFFE5',
        'common-search': '#FFFFFF',
        'form-button-primary': '#C9B8FF',
        'text-default': '#000000',
        'base-grayscale-grayscale-0': '#000000',
      },
      borderRadius: {
        'common-border-radius-full': '1000px',
      },
      gap: {
        'unit-sx': '12px',
      },
    },
  },
  plugins: [],
};
