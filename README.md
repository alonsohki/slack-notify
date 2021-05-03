# slack-webhook-payload
GitHub action to send a payload directly to a Slack webhook.

# How to use
```
      - uses: alonsohki/slack-webhook-payload@v1
        with:
          slack-webhook-url: ${{ secrets.SLACK_WEBHOOK_URL }}
          content: '{ text: "Some message" }'
```
