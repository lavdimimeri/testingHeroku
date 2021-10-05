require('dotenv').config();
const path=require('path');
const express=require('express');
const app=express();
const {router:measurementsRouter}=require('./api/routes/measurements.routes');

app.use(express.static(path.resolve(__dirname,'dist')));

const {connectToDatabase}=require('./database');  
   


app.get("/",(_,res)=>{
    
    res.sendFile("index.html");
});

//app.get("/api",(_,res)=>{
//     res.send({
//       data:"stringdata",
//     });
//});

app.use(measurementsRouter);

connectToDatabase().then(()=>{
    const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
  console.log('Listenting on port: ' + PORT);  
});

}); 

