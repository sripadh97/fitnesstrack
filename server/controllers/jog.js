const express = require('express');
const jog = require('../models/jog'); 
const router = express.Router();
router
    .get('/', (req, res) => 
       res.send({
            jog: jog
    }))
    .post('/addjog', (req,res)=>
         res.send(jog.addjog(req.body.exercise)
        ))
    .post('/removejog', (req,res)=>
         res.send(jog.removejog(req.body.i)
        ))