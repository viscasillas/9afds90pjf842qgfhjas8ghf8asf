const SendGridMail = require("@sendgrid/mail");
const SENDGRID_API_KEY =
  "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";

const SendGridSend = body => {
  SendGridMail.setApiKey(SENDGRID_API_KEY);
  let email = {
    ...body,
    from: "noreply@livecode.com"
  };
  SendGridMail.send(email);
};

module.exports = app => {
  app.post("/email", (req, res) => {
    SendGridSend(req.body);
    res.send(req.body);
  });
};
