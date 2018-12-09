const express = require("express");
require("dotenv").config();

const app = express();

app.get("/public", (req, res) => {
  res.json({
    message: "Hello from public api"
  });
});

app.listen(3001);
console.log("Server running on: ", process.env.REACT_APP_AUTH0_AUDIENCE);
