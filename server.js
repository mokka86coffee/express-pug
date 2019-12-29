const express = require('express');
const fs = require('fs-extra');
const sass = require('node-sass');
const { wayTo } = require('./src/paths');

const app = express();
// PORT
app.listen(8000);
// Html template's engine
app.set('view engine', 'pug');
// Html templates
app.set('views', 'views');
// Static/public
app.use(express.static('public'))

// app.use(
//   sass.middleware({
//       src: __dirname + '/sass', //where the sass files are 
//       dest: __dirname + '/public', //where css should go
//       debug: true
//   })
// );
const mas = [];
setTimeout(() => mas.push({a: 1}, {a: 2}), 2000);

app.get('/', (req, res) => {
  res.render('index', { mas });
});