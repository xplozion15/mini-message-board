const { Router } = require("express");
const newRouter = Router();

newRouter.get("/",(req,res)=>{
    res.send("this is a new message page");
})

newRouter.get("/:messageId",(req,res)=>{
   const {messageId} = req.params 
    res.send(`hi ${messageId}`);
})

module.exports = newRouter;