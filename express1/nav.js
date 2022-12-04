const express=require('express');
const app = express();
const port=7000;

app.get('/', (req, res)=>{
    res.send('hello from Home Page');
});
app.get('/about', (req, res)=>{
    res.send('hello from About Page');
});

app.listen(port,()=>{
    console.log(`listening on port no ${port}`);
});