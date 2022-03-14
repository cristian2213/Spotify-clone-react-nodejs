import tailwindcss from 'tailwindcss';

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
  },
};
