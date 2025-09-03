const { Router } = require("express");
const messageRouter = Router();
const { messages } = require("./indexRouter");

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("messages", { messages: messages, messageId: messageId });
});

module.exports = messageRouter;
