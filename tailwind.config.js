/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                unhide: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-60px)",
                    },
                    "30%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=black]"],
                    primary: "#111111",
                    secondary: "#171818",
                    accent: "#202222",
                },
            },
        ],
    },
}
