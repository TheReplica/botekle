const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let lrowsid = args[0] 
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "760849378654552075"// başvurunun gideceği kanal
	let kanal = "760849290678763570" // başvurunun yapılacağı kanal
  let log = "760849304251400205" // bot eklendi / onaylandı / reddedildi kanalı 
	
  message.delete()
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!lrowsid) return message.channel.send("<a:xx:760851159052714054>**Hatalı kullanım**, `!botekle <Bot ID> <prefix> <dbl onayı>`").then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send("<a:xx:760851159052714054>**Hatalı kullanım**, `!botekle <Bot ID> <prefix> <dbl onayı>`").then(msg => msg.delete(10000))
  if (!onaylımı) return message.channel.send("<a:xx:760851159052714054>**Hatalı kullanım**, `!botekle <Bot ID> <prefix> <dbl onayı>`").then(msg => msg.delete(10000))
  const embed = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${lrowsid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", lrowsid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.get(basvuru).send(embed)
  client.channels.get(log).send(`:alarm_clock: ${message.author} adlı kullanıcının <@${lrowsid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`)
  message.channel.send(`<a:yesiltik:760851159753424926> **Bot ekleme isteğiniz alındı.**`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};