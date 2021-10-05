const router=require('express').Router(); 
const { json } = require('express');
const { Measurement } = require('../models/measurement.model');

router.get('/api/measurements',async(req,res)=>{

    const measurements= await Measurement.find({});
    res.send(measurements);
    console.log(measurements[0]);

   for(var i=0;i<measurements.length;i++){
       var temperature=measurements[i];
       console.log(temperature.temperature);
   }
});

exports.router=router;