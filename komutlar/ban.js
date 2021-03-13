const Discord = require("discord.js");
exports.run = (client, message, args) => {
let member = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = 'BANLOGKANALID'//Log Kanal İD Yazın
if(!member) return message.channel.send("<a:no:813835956142473257>  Lütfen Bir Kullanıcı Etiketle")
if(!sebep) return message.channel.send("<a:no:813835956142473257>  Lütfen Bir Sebep Gir")
guild.members.ban(member)
const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('BLACK')
.addField(`<:sag:810616241882529812> Banlanan Kullanıcı`,member)
.addField(`<:sag:810616241882529812> Yetkili`,message.author)
.addField(`<:sag:810616241882529812> Sebep`,sebep)
client.channels.cache.get(kanal).send(ban)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['yargı'], 
  permLevel: 0 
};
exports.help = {
  name: 'ban', 
  description: 'Kullanıcıya Ban Atar', 
  usage: '!ban @kullanıcı <sebep>' 
};