const { Router } = require("express");
const indexRouter = Router();

 

indexRouter.get("/",(req,res)=>{
    res.render("index",{messages : messages});
})

module.exports = {indexRouter,messages};