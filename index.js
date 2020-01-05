require('body-parser');
require ('axios');

const config = require('./config');

const express = require('express');
express();

const SlackBot = require('slackbots');
const quotes = require('./quotes');


const bot = new SlackBot({
   token: config.slack.token,
   name: config.slack.name
});


// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
});

// parse that junk
function handleMessage(message) {
    if (message.includes('quotes')) {
        quotes.parseQuote(message);
    }
}

function handleQuotesRequest(message) {

}

exports.postToSlack = function postToSlack(message, channel) {
    bot.postMessageToChannel(
        channel,
        message,
    );
};