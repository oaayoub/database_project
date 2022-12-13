const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("station page requested");
        console.log("req.query : ", req.query);
        res.render('Station');
   
    
});
module.exports = router; //always forget