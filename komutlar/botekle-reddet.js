const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:xx:760851159052714054> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let lrowsisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = "760849304251400205" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!lrowsisim) return message.channel.send(`<a:xx:760851159052714054> Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`<a:xx:760851159052714054> Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`<a:xx:760851159052714054> Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<a:xx:760851159052714054> ${message.author} adlı yetkili <@${lrowsisim}> adlı botu reddetti. Sebep : **${sebep} ${sebep1} ** `);
		message.channel.send(`<a:xx:760851159052714054> Botu reddettiniz.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 0
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};