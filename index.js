const core = require('@actions/core');
const { IncomingWebhook } = require('@slack/webhook');

const url = core.getInput('slack-webhook-url');
const content = JSON.parse(core.getInput('content'));
const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  try {
    await webhook.send(content);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
