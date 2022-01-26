// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

//to start bot, type "node index.js" into the cmd
//access the cmd by hitting Ctrl `
//to instantly cd into the folder, use \Users\gabeq\Desktop\Arathorn-Discord-Bot as the pathway (only for my computer obv)