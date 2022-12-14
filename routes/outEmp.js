const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("outEmp page requested");
        res.render('OutEmp');
   
    
});
module.exports = router; //always forget