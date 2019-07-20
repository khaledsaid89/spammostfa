const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602084868054056963")
setInterval(function() {
channel.send(`Mostfa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);