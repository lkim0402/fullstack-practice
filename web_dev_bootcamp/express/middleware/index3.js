import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(logger);
function logger(req, res, next) {
  console.log("Request url: ", req.url);
  console.log("Request method: ", req.method);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  console.log("page shown!");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("Form succesfully submitted!");
  console.log("Submitted!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
