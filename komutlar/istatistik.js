const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField("<a:yklenme:813508510494752810> **__Ping__**<a:yklenme:813508510494752810>", `Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\nBot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("<a:yklenme:813508510494752810> **__Kullanıcı Sayısı__<a:yklenme:813508510494752810>** ",  `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("<a:yklenme:813508510494752810> **__Sunucu Sayısı__<a:yklenme:813508510494752810>**",  `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("<a:yklenme:813508510494752810> **__Kanal Sayısı__<a:yklenme:813508510494752810>**",  `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("<a:yklenme:813508510494752810> **__Aktiflik__<a:yklenme:813508510494752810>**",  `${payidarzaman}`, true)
    .addField("<a:yklenme:813508510494752810> **__Node.JS Versiyon__<a:yklenme:813508510494752810>**",  `${process.version}`, true)
    .addField("<a:yklenme:813508510494752810> **__Ram Kullanımı__<a:yklenme:813508510494752810>**",  `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("<a:yklenme:813508510494752810> **__Discord.JS__<a:yklenme:813508510494752810>**",  `${Discord.version}`, true)
    .addField("<a:yklenme:813508510494752810> **__Konum__**<a:yklenme:813508510494752810>",  `Turkey :flag_tr:`, true)
    .addField("<a:yklenme:813508510494752810> **__Bot Sahibi__<a:yklenme:813508510494752810>**",  `<@SAHİP ID>`, true)
    .addField("<a:yklenme:813508510494752810> **__Geliştiriciler__<a:yklenme:813508510494752810>**",  `<@8SAHİP ID>,<@GELİŞTİRİCİ ID>,<@GELİŞTİRİCİ ID>`, true)
    .addField("<a:yklenme:813508510494752810> **__İşletim Sistemi__<a:yklenme:813508510494752810>**",  ` \`Windows 10 | 32 Bit\` `, true)
    .addField("<a:yklenme:813508510494752810> **__CPU__**",` \`\`\`Intel(R) Xeon(R) CPU @ 2.30GHz\`\`\` `)

  return message.channel.send(istatistikler);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};
exports.help = {
  name: "istatistik",
  description: "Botun İstatistiklerini Gösterir.",
  usage: "istatistik"
};