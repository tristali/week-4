const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    let number = req.query.number;
    const id = req.params.id;
    // console.log("Root in", number,id,numbertotal);

    const templateData = {
        number:req.query.number , 
        total:[number-(-1)]*number/2
    };

    // console.log(templateData.total);
    if(number === 'NaN'){
        res.send('Wrong Parameter');
    }else if( number%1 === 0 && number>0 ){
        return res.send(templateData);
    }else{
        res.redirect(`/getData?number=${Math.abs(parseInt(number))}`);
    };
});


router.get('/:id',(req,res)=>{
    const number = req.query.number;
    const id = req.params.id;
    // console.log(id, number, "I'm here");
 
    if(!number){
        return res.redirect(`/getData?number=${id}`);
    };
    
    res.render('getdata');

});


module.exports = router; 