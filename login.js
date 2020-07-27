//create a variable that will contain the entire discord module
const Discord = require('discord.js');

const client = new Discord.Client();
/*hiding the token for security purposes. To input your own token id follow these steps:
Step 1: npm install dotenv
Step 2: require('dotenv').config();
*/
require('dotenv').config();

/* Step 3: Create a .env file in your project's root directory
Step 4: DISCORD_TOKEN=your_token*/
const token = process.env.DISCORD_TOKEN;
//Log the bot in
client.login(token);

//If client is working then indicate it in the console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

module.exports.client = client;
