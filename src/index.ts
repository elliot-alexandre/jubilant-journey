import { dotenv } from "../config";
import Discord from "discord.js";
import express from "express";
import { AddUser } from "./discord/addUserList";
import { SendGoodVibe } from "./discord/sendMessage";
const app = express();

const url: string = dotenv.parsed.JUBILANT_URL as string;
const token: string = dotenv.parsed.TOKEN as string;

if (!url && !token) {
  throw new Error("Brooky");
}

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix: any = "!";
const comm: any = "addUser";

client.on("messageCreate", function (message: any) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody: any = message.content.slice(prefix.length);
  const command: any = commandBody.search("addUser");
  const arg: any = commandBody.slice(comm.length).split(" ");

  console.log(commandBody);
  console.log(command);
  if (command >= 0) {
    try {
      let test = arg.slice(" ");
      console.log(test);
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
  app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
  });

  // app.post("/new-user", (req, res) => {
  //   AddUser("925203323261419520", req.body.username, token);
  //   res.send("Hello World!");
  // });

  app.post("/send", (req: any, res: any) => {
    SendGoodVibe(token, "Hey OwO ! How was your day ? UwU");
    res.send("Hello World!");
  });

  app.post("/reply", (req: any, res: any) => {
    res.send("Hello World!");
  });

  app.listen(process.env.PORT || 3000, () => {
    return console.log(`Express is listening at ${url}`);
  });
} catch (error: any) {
  console.error(error);
}
