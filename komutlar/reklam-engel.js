const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`<a:no:813835956142473257> Bu **Komutu** Kullanabilmek İçin **Yetkin Yok !**`)
if (!args[0])  {
    const küfürcuk = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<a:no:813835956142473257> **reklam-engel aç Veya kapat Yazmalısın**`)
      return message.channel.send(küfürcuk)
  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<a:yes:813835795130875914> **Reklam Engel Açıldı !**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    const reklamengel = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('**Reklam Engeli Açtım**')
    return message.channel.send(reklamengel)
  }
  if (args [0] == 'kapat') {
    db.delete(`reklamengel_${message.guild.id}`)
   const küfürengel = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:yes:813835795130875914> **Reklam Engel Kapatıldı !**')
    return message.channel.send(küfürengel)
  } 
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam-engel'],
 permLevel: 0
};
exports.help = {
 name: 'reklam-engelle'
};