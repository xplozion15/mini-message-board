const { Router } = require("express");
const messageRouter = Router();
const { getMessageDetails } = require("../controllers/messageController");

messageRouter.get("/:messageId", getMessageDetails);

module.exports = messageRouter;
