const Discord = require("discord.js");
const client = new Discord.Client({ intents: [3243773]});

const {token, prefix } = require('./config.json');

client.on("ready", () => {

  console.log(`
Bot Encendido Cliente ${client.user.tag},
creado por !̷ ̷B̷Y̷ ̷D̷A̷r̷s̷#4026 listo para la accion 
  `)
  console.log(`              
 ___________________________________
||                                 ||
||            MADE BY              ||   
||         !̷ ̷B̷Y̷ ̷D̷A̷r̷s̷#4026         ||
||                                 ||
||_________________________________||
-------------------------------------
`)
	presencia();
});

// aqui esta la precencia edita solo el name si sabes mas de programacion cambia lo demas a tu gusto

function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: ".ayuda para los comandos || made by bydars",
      type: "PLAYING"

    }
  });
}


// si estas en replit crea un secreto y llamalo TOKEN si no estas en replit usa mejor la carpeta config y pon el token de tu bot en donde dice token

client.login(token || process.env.TOKEN);