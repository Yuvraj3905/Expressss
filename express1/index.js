


let express = require('express');
let app=express();

console.log(app);

app.listen(3001, ()=>{ 
    console.log("hi server is connected");
})