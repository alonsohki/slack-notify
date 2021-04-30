const core = require('@actions/core');
const { IncomingWebhook } = require('@slack/webhook');

const url = core.getInput('slack-webhook-url');
const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  await webhook.send({
    text: 'This is a test',
  });
})();

