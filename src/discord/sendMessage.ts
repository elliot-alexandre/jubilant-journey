import { dotenv } from "../../config";
import Discord, { User } from "discord.js";
const fs = require("fs");
import path from "path";
import * as Users from "./list-user.json";

export const SendGoodVibe = (token: string, newMessage: string) => {
  try {
    const client = new Discord.Client({ intents: ["DIRECT_MESSAGES"] });

    client.on("ready", async () => {
      let zeUser: any = Users[0];

      console.log(zeUser);
      await client.users.fetch(`${zeUser.userId}`).then((dm) => {
        dm.send(newMessage);
      });
    });

    client.login(token);
  } catch (e) {
    console.log(e);
  }
};
