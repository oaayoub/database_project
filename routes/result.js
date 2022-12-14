const { query } = require('express');
const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
        console.log("result  page requested");
        console.log("req.query : ", req.query);

        
        

        //you will know the query type from req.query[req_type]


        //incase if it's query 
        //get the query table 
        //from the db and render the answer


        //incase if it's post 
        //post to the db .. check if there violation 
        // return post status


        // db == //hag answer
        
        try{
                
        }
        catch
        {
                err
        }
        
        if (req.query.req_type === 'query')
                res.render('result_query');
        else
                res.render('result_post');


});
module.exports = router; //always forget