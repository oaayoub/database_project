const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("tickets page requested");
        res.render('Ticket');
   
    
});
module.exports = router; //always forget