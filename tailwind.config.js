// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./build/*html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html', './build/**/*.js'], // Added ** for subdirectories
  theme: {
    extend: {},
  },
  plugins: [],
}
