if (cmd === `${prefix}killswich`){
  return message.channel.send("why kill me anyway bye bye ");
}
if (cmd === `${prefixi}nvite`){
    return message.channel.send(https://discordapp.com/api/oauth2/authorize?client_id=443121054530142228&permissions=8&scope=bot)
}
 if(cmd ===`${prefix}severstats`){
   let bicon = bot.user.displayAvatarURL;
   let botembed = new Discord.RichEmbed()
   .setDescription("Bot info ")
   .setColor("#ff0000")
   .setThumbnail(bicon)
   .addField("Bot Name",bot.user.username);
      message.channel.send(botembed)
 }
 if (cmd === `${prefix}report`){
   let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!rUser) return message.channel.semd("Error 404 user not found");
   let reason = args.join(" ").slice(22);

   let reportEmbed = new Discord.RichEmbed()
   .setDescription("reports")
   .setColor("#ff0000")
   .addField("reported user", `${rUser} with ID: ${rUser.id}` )
   .addField("reporting by", `${message.author} with ID: ${message.author.id}`)
   .addField("channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("reason", reason);
   let reportschannel = message.guild.channels.find(`name`, "reports")
   if(!reportschannel) return message.channel.send(" error 404 channel not found you now have permission to shout at the sever owner");

   message.delete().catch(O_o=>{})
   reportschannel.send(reportEmbed);

   return;
 }
});
client.login(process.env.BOT_TOKEN));
