# :one: Instructions from scratch : 


>npm i --save     ***express***   ***webpack***    ***react***    ***react-dom***

>npm i --save-dev ***babel-loader***    ***babel-core***  ***babel-preset-react***  ***babel-preset-es2015***

>npm i ***nodemon*** -g


# :two: Webpack Configuration

> :arrow_right: webpack.config.js

```javascript
module.exports = {
    entry: './js/app.js',

    output: {
        path: './public',
       filename: 'bundle.js',
    },

 module: {

   loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react','es2015']
      }
    }
  ]
 }
}
```

# :three: Running 


Terminal 1 
> nodemon

Terminal 2
> webpack **-w** **-d** 

:information_source:

``-w `` : watch for changes 

``-d`` : map files for debugging

