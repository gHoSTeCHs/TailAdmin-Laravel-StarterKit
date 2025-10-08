/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.ts",
        "./resources/**/*.jsx",
        "./resources/**/*.tsx",
        "./resources/**/*.vue",
        x,
    ],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "progress-bar": "progress-bar 1s linear infinite",
            },
            backgroundImage: {
                "gradient-striped":
                    "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
            },
            backgroundSize: {
                striped: "1rem 1rem",
            },
        },
    },
    plugins: [],
};
