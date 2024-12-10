const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
                'primary': {
                    50: '#e9f9ff',
                    100: '#cef1ff',
                    200: '#a7e8ff',
                    300: '#6bdeff',
                    400: '#26c7ff',
                    500: '#009fff',
                    600: '#0075ff',
                    700: '#005aff',
                    800: '#004de6',
                    900: '#0047b3',
                    950: '#001533'
                },
                'header': '#010e25'
            },
            screens: {
                'xs': '320px'
            }
        }
    },
    plugins: []
}