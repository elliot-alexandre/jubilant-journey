import { dotenv } from "../../config";
import Discord, { User } from "discord.js";
const fs = require("fs");
import path from "path";
import * as Users from "./list-user.json";

export const SendGoodVibe = (token: string, newMessage: string) => {
  const client = new Discord.Client({ intents: ["DIRECT_MESSAGES"] });

  client.on("ready", async () => {
    let zeUser = Users[0];

    await client.users.fetch(`${zeUser.userId}`).then((dm) => {
      dm.send(newMessage);
    });
  });

  client.login(token);
};
