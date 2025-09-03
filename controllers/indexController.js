const { messages } = require("../routes/indexRouter");

function getMessages(req, res) {
  res.render("index", { messages });
}

module.exports = { getMessages };
