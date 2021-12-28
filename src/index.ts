import Discord from "discord.js";
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

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "!";
const comm = "addUser";

client.on("messageCreate", function (message: any) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const command = commandBody.search("addUser");
  const arg = commandBody.slice(comm.length).split(" ");

  console.log(commandBody);
  console.log(command);
  if (command >= 0) {
    try {
      AddUser("925203323261419520", arg, token);
      SendGoodVibe(token, "Hey OwO ! How was your day ? UwU");
      message.reply(`GG WP loser!`);
    } catch (error) {
      console.log(error);
      message.reply(`Something wrong!`);
    }
  } else {
    message.reply(`Something wrong!`);
  }
});

client.login(token);

try {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // app.post("/new-user", (req, res) => {
  //   AddUser("925203323261419520", req.body.username, token);
  //   res.send("Hello World!");
  // });

  app.post("/send", (req, res) => {
    SendGoodVibe(token, "Hey OwO ! How was your day ? UwU");
    res.send("Hello World!");
  });

  app.post("/reply", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(process.env.PORT || 3000, () => {
    return console.log(`Express is listening at ${url}`);
  });
} catch (error) {
  console.error(error);
}
