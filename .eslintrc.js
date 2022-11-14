module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  ignorePatterns: ['**/coverage/**/*.js'],
  root: true,
  extends: '@react-native-community',
};
