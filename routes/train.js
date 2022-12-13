const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("train page requested");
        console.log("req.query : ", req.query);
        res.render('Train');
   
    
});
module.exports = router; //always forget