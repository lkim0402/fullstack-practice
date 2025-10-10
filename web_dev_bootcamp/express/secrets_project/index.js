//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

let isAuthorized = false;
function PasswordCheck(req, res, next) {
  const ans = req.body.password;
  if (ans === "HELLO") {
    isAuthorized = true;
  }
  next();
}

app.use(PasswordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  isAuthorized
    ? res.sendFile(__dirname + "/public/secret.html")
    : res.sendFile(__dirname + "/public/index.html");
});

// app.post("/check", (req, res) => {
//   const ans = req.body.password;
//   ans === "HELLO"
//     ? res.sendFile(__dirname + "/public/secret.html")
//     : res.sendFile(__dirname + "/public/index.html");
// });

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
