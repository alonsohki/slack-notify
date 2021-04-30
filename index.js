const core = require('./.github/actions/slack-notify-pr/node_modules/@actions/core');
console.log(core.getInput('slack-webhook-url'));
