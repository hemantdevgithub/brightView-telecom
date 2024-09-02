/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#007BFF",
                softBlue: "#1370b5",
                secondary: "#28A745",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                syne: ["Syne", "sans-serif"],
            },
        },
    },
    plugins: [],
};
