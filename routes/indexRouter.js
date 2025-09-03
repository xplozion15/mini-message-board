const { Router } = require("express");
const indexRouter = Router();
const { getMessages } = require("../controllers/indexController");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    messageId: 0,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    messageId: 1,
  },
];

indexRouter.get("/", getMessages);

module.exports = { indexRouter, messages };
