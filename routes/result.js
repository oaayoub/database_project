const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("result  page requested");
        console.log("req.query : ", req.query);
        res.render('Employee');
   
    
});
module.exports = router; //always forget