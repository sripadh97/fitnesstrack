const express = require('express');
const nutrition= require('../models/foodlimit');
const router = express.Router();
router
.get('/',(req,res) => 
  
    res.send( {
        FoodLimit:foodlimit.foodList
    }  )
    )

.post('/addfoodlimit',(req,res)=>
    res.send(foodlimit.addfoodlimit(req.foodlimit,req.body.quantity)))
.post('/remove',(req,res)=>
    send(foodlimit.remove(req.body.i)
))
