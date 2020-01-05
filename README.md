# Jim, the custom Slackbot

A slackbot written in Node.js that provides various functionalities. At the moment it only supports "quotes" which can be seen in greater detail below

## Quotes
Be able to add quotes from users and be able to choose a quote at random or choose a random quote from a specific person

* `@jim quotes` will return a random quote
* `@jim quotes -u "[user]"` will return a random quote from the specified user
* `@jim quotes -a -u "[user]" -q "[quote to add]"` will add a quote with the text and who said the quote

## TODO
* GitLab / Github linkage to manage CI/CD
* vCenter linkage to provide infrastructure health reports and inventory management
* Google api linkage, mostly calendar for meeting scheduling, schedule queries, and other features