const Discord = require("discord.js");
exports.run = (client, message, args) => {
let member = args[0]
let guild = message.guild;
let kanal = 'UNBANKANALID'//Log Kanal id Yazın
if(!member) return message.channel.send("<a:no:813835956142473257> Lütfen Bir ID Gir")
guild.members.unban(member)
const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('BLACK')
.addField(`<:sag:810616241882529812> Banı Kaldırlan Kullanıcı`,`<@${member}>`)
.addField(`<:sag:810616241882529812> Yetkili`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
client.channels.cache.get(kanal).send(ban)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'unban', 
  description: 'Kullanıcıya Ban Atar', 
  usage: '!ban @user <sebep>' 
};