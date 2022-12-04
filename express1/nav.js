const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.write('<h1>hello from Home Page</h1>');//here when we use write the page keeps on loading to expect more data changes until send is used
  res.send();
});
app.get('/about', (req, res) => {
  res.send('hello from About Page');
});
app.get('/temp', (req, res) => {
    res.send({ id:1, 
    name:"vinod"
});
  });

app.listen(port, () => {
  console.log(`listening on port no ${port}`);
});
