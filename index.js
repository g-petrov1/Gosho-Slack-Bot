require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/gosho-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/gosho-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/gosho-ping - Check bot latency
/gosho-catfact - Get a cat fact`
  });
});

app.command("/gosho-pederas", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Pederas!`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();