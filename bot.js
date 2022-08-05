// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const winston = require('winston');
const nodeCleanup = require('node-cleanup');
const randomPost = require('./reddit');


// Configure logger settings
const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console(),
    ]
});

nodeCleanup(function (exitCode, signal) {
    logger.info("Exiting")
    client.destroy()
});

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    logger.info(`Logged in as ${client.user.tag}!`);
});

// code BOT features below this line
const randomNum = Math.floor(Math.random() * 10);

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'rate') {
		await interaction.reply(`${interaction.user}, you're a ${randomNum}`)
	}
	if (commandName === 'f1') {
		const replyMessage = await randomPost;
		await interaction.reply(`Fresh from the paddock:  ${replyMessage}`)
	}
	

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server info: ${interaction.guild}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});


// code BOT features above this line

// Login to Discord with your client's token
client.login(token);