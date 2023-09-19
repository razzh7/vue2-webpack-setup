module.exports = {
  presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
  plugins: [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties'
  ],
}
