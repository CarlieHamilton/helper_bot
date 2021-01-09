const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = config.PREFIX;

// Bot connects to server
client.on('ready', () => {
  console.log(`${client.user.tag} is waiting to serve you.`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  message.reply(`Carlie is the most awesomest person ever`);
});

// Welcome message to new member to server
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.login(config.BOT_TOKEN);