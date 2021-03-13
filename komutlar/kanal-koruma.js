const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
let prefix = ayarlar.prefix
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`<a:no:813835956142473257> **Yanlış Kullanım** = **Doğru Kullanım** **!kanal-koruma aç**`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:yes:813835795130875914> Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:yes:813835795130875914> Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
