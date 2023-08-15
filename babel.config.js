module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'babel-plugin-transform-vue-jsx',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
}
