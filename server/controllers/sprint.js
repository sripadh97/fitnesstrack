const express = require('express');
const sprint = require('../models/sprint'); 
const router = express.Router();
router
    .get('/', (req, res) => 
       res.send({
            sprint: sprint
    }))
    .post('/addsprint', (req,res)=>
         res.send(sprint.addsprint(req.body.exercise)
        ))
    .post('/removesprint', (req,res)=>
         res.send(run.removesprint(req.body.i)
        ))