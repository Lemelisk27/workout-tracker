const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../models")

router.get("/",(req,res)=>{
    db.Workout.find({})
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router