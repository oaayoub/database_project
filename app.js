const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('Train');
});


const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
