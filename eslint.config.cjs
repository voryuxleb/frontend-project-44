module.exports = 
 {
   languageOptions: {
     globals: {
       browser: true,
       es2021: true,
       node: true
     },
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module'
     }
   },
   rules: {
     // Основные правила
     'no-unused-vars': 'error',
     'no-console': 'off',
     'no-empty': 'error',
     'no-var': 'error',
     'prefer-const': 'error',
     'semi': ['error', 'always'],
     'quotes': ['error', 'single'],
     'indent': ['error', 2],
     'linebreak-style': ['error', 'unix'],
     'eol-last': ['error', 'always']
   },
   settings: {
     'import/resolver': {
       node: {
         paths: 'src'
       }
     }
   }
 },
{
  files: '*.js',
  rules: {
    'no-undef': 'error'
  }
},
{
  extends: 'eslint:recommended'
},
{
  extends: 'plugin:import/errors'
},
{
  extends: 'plugin:import/warnings'
};
