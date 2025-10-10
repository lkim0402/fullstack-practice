import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // importing bodyParser

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// == mounting the middle ware ==
// urlencoded({ extended: true }) creates a body for
// URL-encoded requests like our form submission
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
