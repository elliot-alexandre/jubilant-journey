import express from "express";
import { dotenv } from "../config";
import { AddUser } from "./discord/addUserList";
import { SendGoodVibe } from "./discord/sendMessage";
const app = express();

const port = dotenv.parsed.JUBILANT_PORT;
const url = dotenv.parsed.JUBILANT_URL;
const token = dotenv.parsed.TOKEN;

if (!port && !url && !token) {
  throw new Error("Brooky");
}

try {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post("/new-user", (req, res) => {
    AddUser("925203323261419520", req.body.username, token);
    res.send("Hello World!");
  });

  app.post("/send", (req, res) => {
    SendGoodVibe(token, "Hey OwO ! How was your day ? UwU");
    res.send("Hello World!");
  });

  app.post("/reply", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    return console.log(`Express is listening at ${url}${port}`);
  });
} catch (error) {
  console.error(error);
}
