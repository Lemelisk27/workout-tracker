const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models")
const path = require('path')

router.get("/",(req,res)=>{
    res.send(index.html)
})

router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

router.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = router