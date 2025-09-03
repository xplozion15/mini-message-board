const { Router } = require("express");
const newRouter = Router();
const { renderForm, postMessage } = require("../controllers/newController");

newRouter.get("/", renderForm);

newRouter.post("/", postMessage);

module.exports = newRouter;
