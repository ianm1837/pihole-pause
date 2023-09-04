/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [require('daisyui'), require('tailwindcss/nesting')],
    daisyui: {
        themes: [
            {
                night: {
                    ...require('daisyui/src/theming/themes')[
                        '[data-theme=night]'
                    ],
                    primary: '#818CF8',
                    secondary: '#38bdf8',
                },
            },
        ],
    },
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '0rem',
                sm: '0rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontSize: {
                xxs: '.5rem',
            },
        },
    },
}
