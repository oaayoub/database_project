const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("stopBy page requested");
        res.render('StopBy');
   
    
});
module.exports = router; //always forget