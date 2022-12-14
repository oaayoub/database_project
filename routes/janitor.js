const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("jan page requested");
        res.render('Janitor');
   
    
});
module.exports = router; //always forget