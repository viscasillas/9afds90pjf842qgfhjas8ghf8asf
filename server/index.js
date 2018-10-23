const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
// app.use(express.json()); // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies
let db = {
  host: "127.0.0.1",
  port: 5984
};

let dbRoot = `http://${db.host}:${db.port}`;
app.dbRoot = dbRoot;
app.use(cors());
app.use(bodyParser.json());
// Root
app.get("/", (req, res) => {
  res.send("Invalid Route");
});

["rooms", "uuid"].map(endpoint => require(`./${endpoint}/index.js`)(app));

app.listen(8080, () => {
  console.log(`Check out the app at http://localhost:${8080}`);
});
