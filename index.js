const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

// Bot connects to server
client.on('ready', () => {
  console.log(`${client.user.tag} is waiting to serve you.`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  message.reply(`Carlie is the most awesomest person ever`);
});

client.login(config.BOT_TOKEN);