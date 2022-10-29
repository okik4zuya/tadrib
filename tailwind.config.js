const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
<<<<<<< HEAD
    daisyui: {
        themes: ["dark", "cupcake"],
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
=======

    plugins: [require('@tailwindcss/forms')],
>>>>>>> f08ba469957512e236e2cba608d29265f7bef5f1
};
