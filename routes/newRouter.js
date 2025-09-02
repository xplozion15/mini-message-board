const { Router} = require("express");
const newRouter = Router();



// newRouter.get("/:messageId",(req,res)=>{
//    const {messageId} = req.params 
//    res.send(`hi ${messageId}`);
// })

newRouter.post("/",(req,res)=>{
    // request.body.message, request.body.name
    const message = req.body.message;
    const name = req.body.name;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect("/")
}
)

module.exports = newRouter;