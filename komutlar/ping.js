const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const exampleEmbed = new Discord.MessageEmbed()
  .addField(`<:tik:810617766893584385> Pingim` ,`${client.ws.ping}ms`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping',
  usage: 'ping'
}; 