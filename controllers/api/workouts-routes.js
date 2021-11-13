const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../models")

router.get("/",(req,res)=>{
    db.Workout.aggregate([
        {
            $addFields: {
                "totalDuration": {$sum: "$exercises.duration"},
            }
        }
    ])
        .then(dbWorkout=>{
            res.json(dbWorkout)
        })
        .catch(err=>{
            res.json(err)
        })
})

router.get("/range",(req,res)=>{
    db.Workout.aggregate([
        {
            $addFields: {
                "totalDuration": {$sum: "$exercises.duration"},
            }
        }
    ]).sort({"day":-1}).limit(7)
    .then(dbRange=>{
        res.json(dbRange)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router