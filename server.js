const express = require('express');
const indexRouter = require('./routes/indexRouter');
const newRouter = require("./routes/newRouter.js")
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use("/",indexRouter);
app.use("/new",newRouter)

const PORT  = 3000;

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});