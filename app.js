const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('Train');
});

app.use(express.json());//middleware to convert req.body m to json

const train = require('./routes/train');
const result = require('./routes/result');
const employee = require('./routes/employee');
const station = require('./routes/station');
const ticket = require('./routes/ticket');

app.use('/train', train);
app.use('/employee', employee);
app.use('/result', result);
app.use('/station', station);
app.use('/ticket', ticket);

const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
