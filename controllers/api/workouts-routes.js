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

router.put("/:id", (req,res)=>{
    console.log(req.body)
    db.Workout.updateOne({
        _id:mongoose.Types.ObjectId(req.params.id)
    },
    {
        $push:{"exercises":req.body}
    })
    .then(updateDb=>{
        res.json(updateDb)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.post("/", (req,res)=>{
    db.Workout.insertMany(req.body)
    .then(insertDb=>{
        workout = insertDb[0]
        res.json(workout)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router