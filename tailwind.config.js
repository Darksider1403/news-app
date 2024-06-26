/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        boxShadow: {
            sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        },
        screens: {
            sm: "640px",
            "3xl": "1600px",
        },
        extend: {
            colors: {
                sky: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
});

