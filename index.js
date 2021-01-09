const Discord = require("discord.js");
const {prefix, token} = require("./config.json");

const client = new Discord.Client();
let sMessage = "";

// Bot connects to server
client.once('ready', () => {
  console.log(`${client.user.tag} is waiting to serve you.`);
});

// Welcome message to new member to server
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    message.reply(`Carlie is the most awesomest person ever`);
  }

// Love react to "love" message
  const lowercaseMessage = message.content.toLowerCase()
  if (lowercaseMessage.includes("love")) {
    message.react("❤️");
  }


// Dick gif when "dick" message
  const lowercaseMessage = message.content.toLowerCase()
  const randomMessage = [
    "https://media.giphy.com/media/yFckZHgsXovLO/giphy.gif",
    "https://media.giphy.com/media/Qc8GJi3L3Jqko/giphy.gif",
    "https://media.giphy.com/media/U6btA7Oenk5sk/giphy.gif",
    "https://media.giphy.com/media/10McuulZ5ec19K/giphy.gif",
    "https://media.giphy.com/media/mv7FcziOrIp6o/giphy.gif"
  ]
  const randomNumber = Math.floor(Math.random() * randomMessage.length)
  const randomGif = randomMessage[randomNumber]
  if (lowercaseMessage.includes("dick")) {
    message.channel.send(randomGif);
  };

//save sMessage
  if (message.content.startsWith("-"))  {
    sMessage = "Toaststools";
    console.log(sMessage)
  }

//repeat back sMessage as reply
  console.log(sMessage)
  if (message.content.includes("*"))  {
    message.reply(sMessage)
  }
});

client.login(token);