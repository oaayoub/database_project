const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("SEMP page requested");
        res.render('StationEmp');
   
    
});
module.exports = router; //always forget