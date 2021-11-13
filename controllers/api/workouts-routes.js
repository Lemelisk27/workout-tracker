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

module.exports = router