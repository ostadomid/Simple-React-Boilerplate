# Simple-React-Boilerplate



Terminal 1 
> nodemon

Terminal 2
> webpack -w -d 

-w : watch for changes     -d : map files for debugging
**

#Instructions from scratch : 
>npm init

>npm i --save **express** **webpack** **react** **react-dom** 

>npm i --save-dev babel-loader babel-core babel-preset-react babel-preset-es2015

>npm i nodemon -g

#Webpack Configuration

>module.exports = {

>    entry: './js/app.js',

>    output: {

>        path: './public',

>       filename: 'bundle.js',

>    },

> module: {

>   loaders: [

>    {

>      test: /\.js$/,
>      exclude: /(node_modules|bower_components)/,
>      loader: 'babel', // 'babel-loader' is also a legal name to reference
>      query: {
>        presets: ['react','es2015']
>      }
>    }
>  ]
>}
>}


