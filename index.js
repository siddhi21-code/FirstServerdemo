import express from "express";
 const app = express();
 const PORT = 3000;

 app.get("/",(req,res)=>{
   res.json("{msg} hello word");

 })

 app.listen(PORT,()=>{
    console.log('server is running on port ${port}...')

 })
 
