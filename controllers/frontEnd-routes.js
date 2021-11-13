const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models")
const path = require('path');
const { ifError } = require('assert');

router.get("/",(req,res)=>{
    res.send(index.html)
})

router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

router.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

router.get("/exercise/:id",(req,res)=>{
    db.Workout.findOne({_id:mongojs.ObjectId(req.params.id)})
    .then(exerciseData=>{
        console.log(exerciseData)
        res.json(exerciseData)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router