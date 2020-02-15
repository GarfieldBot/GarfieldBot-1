const superagent = require("superagent");
const Discord = require("discord.js");
// const { formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {


  function duration(ms){
    const sec = Math.floor((ms /1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, '0')} dni, ${hrs.padStart(2, '0')} godzin, ${min.padStart(2,'0')} minut, ${sec.padStart(2,'0')} sekund.`;
  }


  const pusheen = await bot.emojis.get("671801375046369302");  
  const loading = await bot.emojis.get("667300332388483074");
  const js = await bot.emojis.get('676118645968994343');
  const load = new Discord.RichEmbed()
  .setTitle(loading + " Trwa wysyłanie")
  .setColor("#ff0000")
  .setDescription("Wysyłanie wiadomości na PW... Zazwyczaj to trwa ok. 1-2 sekundy. Jeżeli nadal nie dostałeś wiadomości, użyj komendy `g!bug` i opisz błąd.")
  .setTimestamp();
  const loaderMSG = await message.channel.send(load);


  const loaded = new Discord.RichEmbed()
  .setAuthor("✔️ Sukces!")
  .setDescription("Wiadomość z informacjami o bocie, została przekazana do ciebie na PW.")
  .setColor("#ffb300")
  .setTimestamp();

  
  setTimeout(function () {
        loaderMSG.edit(loaded);
  }, 1002);


    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Nazwa bota:", ` ${bot.user.username}`, inline)
    .addField("Programiści bota:", "xMuffionexᵘʷᵘ#8138, Rainbow P#6774", inline)
    .addField("Prefix:"," `g!`", inline)
    .addField("Servery", `🛡 ${servsize}`, inline)
    .addField("Kanały", `📁 ${chansize}`, inline)
    .addField("Użytkownicy", ` ${usersize}`, inline)
    .addField("Biblioteka bota", `Discord.${js}`, inline)
    .addField("Stworzony:", formatDate(bot.user.createdAt), inline)
    .addField("Uptime:", `${duration(bot.uptime)}`, inline)
    .setFooter(`Informacje o : ${bot.user.username}. Zaprogramowany przez: xMuffionex i Rainbow P!`)
    .setTimestamp();
    
    let lastUpdate = new Discord.RichEmbed()
    .setAuthor("Ostatnia aktualizacja", message.author.iconURL)
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Wersja ostatniej aktualizacji:", "0.9.9")
    .addField("Dodane:", "- Komendy NFSW \n- Komenda do wyciszania \n- Komenda do ustawiania kanału NSFW! \n- Komenda `g!zaproszenie-bota` do pokazywania linku do dodania bota! " + pusheen, inline)
    .addField("Usunięto:","--------------  ")
    .setFooter("GarfieldBot © xMuffionex 2020")
    .setTimestamp();

    let zapowiedzi = new Discord.RichEmbed()
    .setColor("#ffdd00")
    .addField("Zapowiedzi:", "- Poprawienie systemu ostrzeżen.\n- Więcej komend z API. \n- Optymalizacja.")
    .setFooter("GarfieldBot © xMuffionex 2020")
    .setTimestamp();


    var msg = message.author;

    msg.send(botembed);
    msg.send(lastUpdate);
    msg.send(zapowiedzi);

    function formatDate(date) {
      return new Intl.DateTimeFormat('pl-PL').format(date)
  }
  

}

module.exports.help = {
  name:"botinfo"
}