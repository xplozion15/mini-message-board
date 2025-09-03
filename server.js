const express = require("express");
require("dotenv").config();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter.js");
const messageRouter = require("./routes/messageRouter.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404).send("Error 404 Page Not Found LOL");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
