const express = require("express");
require("dotenv").config();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter.js");
const messageRouter = require("./routes/messageRouter.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
