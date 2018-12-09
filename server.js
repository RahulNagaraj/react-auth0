const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
require("dotenv").config();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),
  audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
  issuer: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
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
