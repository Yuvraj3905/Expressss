const path = require('path');
const express = require('express');
// const { hasSubscribers } = require('diagnostics_channel');

const app = express();
//relative path nhi dena absolute dena hai
// console.log(__dirname);

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');
// //builtin middleware

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

//template engine
app.get('', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.send('hello from express123456');
}); //get(root,callback)  CALLBACK functions have firther 2 parameters req,res

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(8000, () => {
  console.log('listening on port at 8000');
});

// // let express = require('express');
// // let app = express();

// // // console.log(app);
// // app.use((req, res) => {
// //   console.log(req);
// //   console.log(res);
// //   console.log('hi i am a middleware funciton');
// //   res.send('<h1>hi welcome to the server</h1>');
// // });
// // app.listen(3001, () => {
// //   console.log('hi server is connected');
// // });
