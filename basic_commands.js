const login = require('./login.js');

const client = login.client;
const PREFIX = process.env.PREFIX;
//creating a function so that you don't need to keep pasting the same commands again and again
const isValidCommand = (message, command) => message.content.toLowerCase().startsWith(PREFIX + command);
var numbers1, numbers2, numbers3;

client.on('message', function(message) {
    if(message.author.bot) return;
    //if(message.content.toLowerCase() === PREFIX + 'hello') {
    //Use startswith if you want to take arguments
    if(message.content.toLowerCase().startsWith(PREFIX + 'bot')) {
        message.reply('Hello!').catch(err => console.log(err));
    }
    if(isValidCommand(message, "roll")) {
        numbers1 = message.content.replace(PREFIX + 'roll ', '');
        numbers2 = 1;
        if(numbers1 === PREFIX + 'roll') {
            numbers1 = 10;
            numbers2 = 1;
        }
        else if(numbers1.includes('-')) {
            numbers3 = numbers1.split('-')
            numbers2 = parseInt(numbers3[0]);
            numbers1 = parseInt(numbers3[1]);
        }
        console.log(numbers2 + ' ' + numbers1);
        const roll = () => Math.floor(Math.random() * numbers1) + numbers2;
        message.reply('rolled a **' + roll() + '** (' + numbers2 + '-' + numbers1 + ')');
    }

})