const mongoose=require('mongoose');
const {schema, Measurement}=require('./api/models/measurement.model');


async function connectToDatabase(){
   await mongoose.connect(process.env.MONGO_URI+process.env.MONGO_DATABASE);
    
   const newMeasurement = await Measurement.create({
      unit_id:12355678,
      unit_timestamp:Date.now(),
      temperature:25.2,
   });

    
};

exports.connectToDatabase=connectToDatabase;