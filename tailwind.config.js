/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Roboto, sans-serif",
            },

            colors: {
                ignite: {
                    300: "#129E57",
                    500: "#047C3F",
                },

                yellow: {
                    500: "#F7DD43",
                    700: "#E5CD3D",
                },

                red: {
                    500: "#DB4437",
                },

                blue: {
                    500: "#338AF3",
                },

                gray: {
                    100: "#E1E1E6",
                    200: "#C4C4CC",
                    300: "#8D8D99",
                    600: "#323238",
                    800: "#202024",
                    900: "#121214",
                },
            },

            backgroundImage: {
                app: "url(/app-bg.png)",
            },
        },
    },
    plugins: [],
};
