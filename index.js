const core = require('@actions/core');
const { IncomingWebhook } = require('@slack/webhook');

const url = core.getInput('slack-webhook-url');
const content = JSON.parse(core.getInput('content'));
const webhook = new IncomingWebhook(url);

console.log(content);

// Send the notification
(async () => {
  await webhook.send(content);
})();
