
const db = require("../db/queries");
const { body, validationResult } = require('express-validator');

const validateUser = [
  body("name").isLength({ min: 2, max: 20 }).withMessage("Length of name should be between 2 to 20 characters").isAlpha("en-US", { ignore: " " }).withMessage("Name shouldnt have number in it"),
  body("message").isLength({min:5,max:40}).withMessage("Length of the message should be between 5 to 40 characters")
];

function renderForm(req, res) {
  res.render("form", {});
}

const postMessage = [
  validateUser, async(req,res) => {
    const errors = validationResult(req);
    const message = req.body.message;
    const name = req.body.name;

      const messageObject = {
    text: message,
    username: name,
    added: new Date(),
  };

  if(!errors.isEmpty()) {
    
    return res.status(400).render("form",{errors : errors.array(),name:name,message:message})
  }

  else if(errors.isEmpty()) {
    await db.postMessageToDb(messageObject);
    return res.render("index",{});
  }

  }
]

// async function postMessage(req, res) {
//   const message = req.body.message;
//   const name = req.body.name;

//   const messageObject = {
//     text: message,
//     username: name,
//     added: new Date(),
//   };

//   await db.postMessageToDb(messageObject);

//   res.redirect("/");
// }

module.exports = { renderForm, postMessage };
