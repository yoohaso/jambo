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
        'color-base-white-white': '#FFFFFF',
        'form-button-primary': '#C9B8FF',
      },
      borderRadius: {
        'common-border-radius-full': '1000px',
      },
      gap: {
        'unit-sx': '12px',
        'unit-xxxs': '4px',
        'common-presentCard-gap': '8px',
      },
      padding: {
        'common-padding-presentCard': '20px',
      },
      borderColor: {
        'base-grayscale-grayscale-0': '#000000',
      },
    },
  },
  plugins: [],
};
