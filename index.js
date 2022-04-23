const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'ItsGom_',
        password: 'oauth:z0n2dknebd43b4myeu6xh07nj7eoo1'
    },
    channels: ['ItsGom_']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if(self || !message.startsWith('!')) {
        return;
    }

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'echo') {
        client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
    } else if(command === 'hello') {
        client.say(channel, `@${tags.username}, Yo What's up`);
    } else if(command === 'dice') {
        const result = Math.floor(Math.random() * 6) + 1;
        client.say(channel, `@${tags.username}, You rolled a ${result}!`);
    }

    //console.log(`${tags['display-name']}: ${message}`);
});