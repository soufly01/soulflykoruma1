const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Buyur Yardım Menüm !')
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)
    .addField('KOMUT ADI', 'Komut Açıklaması', true)

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};
