const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app.ts'),
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve(__dirname, ''),
    },
  },
  target: 'node',
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
};