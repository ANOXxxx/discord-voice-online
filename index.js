const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});
const { joinVoiceChannel } = require("@discordjs/voice");
client.on("ready", () => {
  client.user.setActivity(`osu!`, {
    type: "STREAMING",
    url: "https://twitter.com/i/status/1771840622439301598",
  });
  setInterval(async () => {
    client.channels
      .fetch("1003399717541130370") // اي دي الروم الصوتي
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator,
        });
      })
      .catch((error) => {
        return;
      });
  }, 1000);
});

client.login(process.env.token);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Self-ping every 5 minutes (300000 ms)
setInterval(() => {
  fetch('http://your-replit-project-name.your-username.repl.co/ping')
    .then(() => console.log('Self-pinged'))
    .catch(err => console.error('Self-ping error:', err));
}, 300000); // 5 minutes
