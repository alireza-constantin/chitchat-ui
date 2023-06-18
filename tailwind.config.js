/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                unhide: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-60px)'
                    },
                    '30%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                }
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "base-100": "#27272a",
                },
            },
            
        ],
    },
}
