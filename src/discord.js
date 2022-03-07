require("dotenv").config();
const { Client, } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const {fetch,events} = require("./puppeteer");

// const data = require("./puppeteer.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", async(msg) => {
  if (msg.content === "event") {
    await fetch();
    let str = ''
    for (var i = 0; i < events.length; i++) {
       str +=`${events[i].title}\n${events[i].details}\n${events[i].link}\n\n`
    }
   await msg.reply(`${str}`);
   // console.log(str)
  }
});


const link = "";

client.login(link);
