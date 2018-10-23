const axios = require("axios");
module.exports = app => {
  app.post("/uuid_bulk", (req, res) => {
    axios
      .post(app.dbRoot + "/livecode-uuid/_bulk_docs", {
        ...req.body
      })
      .then(response => {
        res.send({
          desc: "Create a new UUID",
          response: response.data
        });
      })
      .catch(error => res.send(error));
  });

  app.post("/uuid", (req, res) => {
    if (req.body.type) {
      axios
        .post(app.dbRoot + "/livecode-uuid", {
          ...req.body.type
        })
        .then(response => {
          res.send({
            desc: "Create a new UUID",
            response: response.data.id
          });
        })
        .catch(error => res.send(error));
    } else {
      res.send({
        desc: "Create a new UUID",
        response: "ERROR: Please provide a value to type"
      });
    }
  });
};
