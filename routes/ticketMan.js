const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("tMan page requested");
        res.render('TicketMan');
   
    
});
module.exports = router; //always forget