const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("phone page requested");
        res.render('Phone');
   
    
});
module.exports = router; //always forget