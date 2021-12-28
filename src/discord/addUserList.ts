import { dotenv } from "../../config";
import Discord from "discord.js";
const fs = require("fs");
import path from "path";

export const AddUser = (idServer: string, username: string, token: string) => {
  const client = new Discord.Client({ intents: ["GUILDS"] });

  client.on("ready", async () => {
    let guildMaster = await client.guilds.fetch(idServer);

    let coolKid = await guildMaster.members.search({ query: username });

    fs.writeFile(
      path.join("dist/src/discord", "list-user.json"),
      JSON.stringify(coolKid, null, 2),
      (err: Error) => {
        if (err) throw err;
        console.log("Data written to file");
      }
    );
  });

  client.login(token);
};
//925203323261419520
