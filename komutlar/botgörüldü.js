const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let lrowsisim = args[0]
  let sahip = args[1]
	let log = "760849304251400205" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!lrowsisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`)
  message.delete()
		client.channels.get(log).send(`<a:yukleniyor:760851156795654144> **${message.author}** isimli yetkili **<@${lrowsisim}>** adlı botu **kontrol ediliyor.**`);
		message.channel.send(`<a:yesiltik:760851159753424926> Botu Görüldü Ye Aldınız.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-görüldü', 'görüldü'],
  permLevel: 0
};

exports.help = {
  name: 'bot-görüldü', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};