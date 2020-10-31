module.exports = {
  babelrcRoots: [
    ".",
    "libs/*",
    "apps/*",
  ],  
  
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  
  plugins: [
    'babel-plugin-styled-components',
  ],
};
