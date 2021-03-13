module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  console.log(`${client.user.id}                                                                                                                                                                     `)
client.user.setActivity(`Youtube SoulFly | https://discord.gg/PVNKU5r64Q`, { type: "PLAYING"});  
 console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + ` kullanıcıya hizmet veriliyor!`);
};