/*const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
client.login(token);*/

const login = require('./login.js');
//console.log(login.client);
const client = login.client;

//if client (bot) is turned on, and a message event occurs (a message is sent to the bot)
client.on('message', message=> {
    //if(message.content.toLowerCase() === 'hello')
    if(message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('hi'))
        message.channel.send('Hey there!' + '<@' + message.author.id + '>');
    else if(message.content.toLowerCase() === 'ping')
        message.reply('Pong');
    else if(message.content.includes('time'))
    {
        var date = new Date();
        message.channel.send('The Time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }
    else if(message.content.includes('date'))
    {
        var date = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        message.reply('The Date is ' + date.getDate() + 'th ' + months[date.getMonth()] + ' ' + date.getFullYear());
    }
    else if(message.content.includes('Day'))
    {
        var date = new Date();
        var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        message.reply('It is ' + day[date.getDay()]);
    }
    else if(message.content.includes('live') || message.content.includes('living'))
    {
        var date = new Date();
        date = date.toTimeString();
        console.log(typeof(date));
        date = date.split(' ');
        console.log(date);
        date = date[2];
        date = date.replace('(', '')
        message.reply('You are in ' + date +' right now.');
    }
}); 