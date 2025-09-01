const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    messageId : 0,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    messageId : 1
  }
];



indexRouter.get("/",(req,res)=>{
    res.render("index",{messages : messages});
})

module.exports = indexRouter;