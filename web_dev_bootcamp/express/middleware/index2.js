import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

//mounting morgan w/ predefined string

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  console.log("page shown!");
  res.sendFile(__dirname + "/public/index.html");
});

app.use(morgan("combined"));
app.post("/submit", (req, res) => {
  res.send("Form succesfully submitted!");
  console.log("Submitted!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
