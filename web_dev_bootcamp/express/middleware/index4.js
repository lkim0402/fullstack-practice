import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

function logger(req, res, next) {
  console.log("Request url: ", req.url);
  console.log("Request method: ", req.method);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  res.send(`
    <p>Street name: ${req.body.street}</p>
    <p>Pet name: ${req.body.pet}<p>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
