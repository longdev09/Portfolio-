/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'], // Đảm bảo các tệp JSX của bạn ở trong phạm vi
    theme: {
        extend: {
            colors: {
                darkPurple: '#6a40e4',
                lightPurple: '#c05ee8',
            },
        },
        keyframes: {
            marquee: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
