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



const janitor = require('./routes/janitor');
const outEmp = require('./routes/outEmp');
const phone = require('./routes/phone');
const stationEmp = require('./routes/stationEmp');
const stopBy = require('./routes/stopBy');
const tikcetMan = require('./routes/ticketMan');

app.use('/janitor', janitor);
app.use('/outEmp', outEmp);
app.use('/phone', phone);
app.use('/stationEmp', stationEmp);
app.use('/stopBy', stopBy);
app.use('/TicketMan', tikcetMan);



const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
