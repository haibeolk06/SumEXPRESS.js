const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.render('sum/form');
});


router.post('/', function(req, res){
    console.log(req.body);
    const FirstNum = Number(req.body.FirstNum);
    const SecondNum = Number(req.body.SecondNum);
    const result = FirstNum+SecondNum;
    res.render('sum/result', {FirstNum, SecondNum, result});
});


module.exports = router;