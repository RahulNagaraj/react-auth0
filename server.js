const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
require("dotenv").config();

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://reactjsauth0-dev.auth0.com/.well-known/jwks.json"
  }),
  audience: "http://localhost:3001",
  issuer: "https://reactjsauth0-dev.auth0.com/",
  algorithms: ["RS256"]
});

const app = express();

app.get("/public", (req, res) => {
  res.json({
    message: "Hello from public api"
  });
});

app.get("/private", jwtCheck, (req, res) => {
  res.json({
    message: "Hello from private api"
  });
});

app.listen(3001);
console.log("Server running on: ", process.env.REACT_APP_AUTH0_AUDIENCE);
