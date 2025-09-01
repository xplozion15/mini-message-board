const express = require('express');
require('dotenv').config()
const indexRouter = require('./routes/indexRouter');
const newRouter = require("./routes/newRouter.js")

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use("/",indexRouter);
app.use("/new",newRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});