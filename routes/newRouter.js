const { Router} = require("express");
const newRouter = Router();
const {messages} = require("./indexRouter");

newRouter.get("/",(req,res)=>{
    res.render("form",{ messages: messages })
})

newRouter.post("/",(req,res)=>{
    // request.body.message, request.body.name
    const message = req.body.message;
    const name = req.body.name;
    messages.push({ text: message, user: name, added: new Date(), messageId: messages.length });
    res.redirect("/")
}
)

module.exports = newRouter;