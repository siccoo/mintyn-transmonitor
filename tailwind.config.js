/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
      colors: {
        green: '#27AE60',
        navigationGrey: '#647787',
        navigationBg: '#afcdf3',
        white: '#FFFFFF',
        offWhite: '#F4F4F4',
        outletBackground: '#F7F8FA',
        grey: '#787C90',
        dark: '#262626',
        ash: '#4F4F4F',
        lightGrey: '#DDE0E3',
        black: '#000000',
        yellow: '#EBC315',
        blue: '#1860EC',
        blu: '#1875F0',
        deepGrey: '#414042',
        searchBorder: '#787878',
        statusBorder: '#CED0DA',
        tableHead: '#EAEEF0',
        statusGrey: '#C4C4C4',
        tableData: '#7F8FA4',
        tableRowBorder: '#CCCFD4',
        transparent: 'transparent',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        SegoeUI: ['Segoe UI', 'sans-serif'],
      },
      extend: {
        backgroundImage: {
            'graph': "url('../src/assets/images/big-graph.svg')",
          },
      },
    },
    plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  };
  