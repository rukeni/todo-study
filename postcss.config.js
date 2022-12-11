module.exports = {
  plugins: [
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: { flexbox: 'no-2009' },
        features: { 'custom-properties': false },
        stage: 3,
      },
    ],
  ],
};
