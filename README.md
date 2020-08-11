# Discord-Bot
Created a Discord Bot with multiple functionality, in Node JS.

# Requirements
- dotenv (can be installed via cmd using npm install dotenv)
- node (download it from this link: https://nodejs.org/en/)
- Discord API (discord.js has been used for this bot, it can be downloaded via cmd using npm install discord.js)

# Running the bot
First ensure you have already created a discord bot. You can do this via the following link:https://discord.com/developers/applications.

Once the bot has been created, install the dotenv package using npm install dotenv. Now, go into the directory where you have download this github repository and create a new file, name it .env. Open this file in any text editor and paste this in: DISCORD_TOKEN=your_token where your_token will be your token ID present in the bot section of the above discord link provided.

Check if node is installed by opening a terminal (if you are on linux) or powershell / command prompt (if you are on windows), and enter node into the command-line. If node exists, then go into the repository where you have downloaded this git repo and enter node main.js.

# Current Functionality
Currently, this bot can log into your discord server and give responses to certain questions you put in the chat of your server. You can also use the bot to roll a number. This can be done via the ?roll command. You can give it arguments or leave it empty, for example: **?roll** will return a random value between 1-10. **?roll 50** will return a random value between 1-50. **?roll 25-102** will return a random value between 25-102.
