import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "linkedlnmaster";
const yourPassword = "12345";
const yourAPIKey = "dca24eff-3fc4-495a-9ded-3a97f3ce8501";
const yourBearerToken = "f7a4df9f-2525-4c03-9469-c588bd56334d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    const result = response.data;
    const content = JSON.stringify(result);
    console.log("content: ", content);
  } catch (error) {
    console.log("error: ", error);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const jsObj = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

    const result = jsObj.data;
    const content = JSON.stringify(result);
    console.log("all: ", content);
  } catch (error) {
    console.log("error: ", error);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const res = await axios.get(
      `${API_URL}filter?score=5&apiKey=${yourAPIKey}`
    );
    const response = res.data;
    const content = JSON.stringify(response);
    console.log("filter: ", content);
  } catch (error) {
    console.log("error: ", error);
  }
});

app.get("/bearerToken", (req, res) => {
  try {
    const jsObj = axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: yourBearerToken,
      },
    });

    const data = jsObj.data;
    const content = JSON.stringify(data);
    console.log("secrets: ", content);
  } catch (e) {
    console.log("error: ", e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
