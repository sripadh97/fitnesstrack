const express = require('express');
const run = require('../models/run'); 
const router = express.Router();
router
    .get('/', (req, res) => 
       res.send({
            run: run
    }))
    .post('/addrun', (req,res)=>
         res.send(run.addrun(req.body.exercise)
        ))
    .post('/removerun', (req,res)=>
         res.send(run.removerun(req.body.i)
        ))