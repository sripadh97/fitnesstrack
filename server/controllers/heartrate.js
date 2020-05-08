const express = require('express');
const heartrate= require('../models/heartrate');
const router = express.Router();
router
 .get('/',(req,res)=>{
res.send({
    heartrate:heartrate.ratecount
}
);
}
 )  
.post('/addheartrate',(req,res)=>
    res.send(heartrate.addheartrate(ratecount)
)
)
 