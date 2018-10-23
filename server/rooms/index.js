const axios = require("axios");
module.exports = app => {
  app.get("/rooms", (req, res) => {
    axios
      .get(app.dbRoot + "/livecode-rooms/_all_docs?include_docs=true")
      .then(response =>
        res.send({
          desc: "List of rooms",
          response: response.data.rows.map(row => {
            return {
              id: row.id,
              questions: row.doc.questions
            };
          })
        })
      );
  });

  app.get("/rooms/:id", (req, res) => {
    axios
      .get(app.dbRoot + "/livecode-rooms/_find" + req.params.id)
      .then(response =>
        res.send({
          desc: "List of rooms",
          response: response.data
        })
      );
  });

  app.post("/rooms", (req, res) => {
    axios
      .post(app.dbRoot + "/livecode-rooms", {
        ...req.body
      })
      .then(response => {
        res.send({
          desc: "Create a new room",
          response: response.data.id
        });
      })
      .catch(error => res.send(error));
  });
};
