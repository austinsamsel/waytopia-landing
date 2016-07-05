// dependencies for mnml

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")

// css to be processed
var css = fs.readFileSync("src/style.css", "utf8")

// process css
var output = postcss()
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .use(autoprefixer())
  .process(css, {
    from: "./src/style.css",
    to: "./css/style.css"
  })
  .css

fs.writeFile("css/style.css", output, 'utf-8')

// Using Sqwish for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: './css/style.css',
    fileOut: './css/style.min.css'
});
