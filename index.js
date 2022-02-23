const http =require("http");
const express =require("express");
const app = express();
const cors=require("cors");
const path =require("path");
var apis= require("./apis/api.route");
app.use(cors());
app.use("/api",apis);
const port=3000

app.listen(port,()=>{
    console.log(`app is on ${port}`);
})


module.exports=app;