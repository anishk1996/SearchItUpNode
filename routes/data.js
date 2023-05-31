var express = require('express');
var router = express.Router();
const request = require('request')

const key = "fbbd6ef1beba1bbafcbc0ff22a6998f3";
/* GET home page. */
router.get('/get', function(req, res, next) {
    var query = req.query['search'];
    var page = req.query['page']; 
    console.log('query string is', query);
    let url = `http://api.serpstack.com/search?access_key=${key}&query=${query}&page=${page}&num=10`;
    request(url, (error, response, body)=>{
    
        // Printing the error if occurred
        if(error) console.log(error)
       
        // Printing status code
        console.log(response.statusCode);
         
        // Printing body
        console.log(body);
        res.setHeader('Content-Type', 'application/json');
        res.write(body);
        res.end();
    });
});

module.exports = router;
