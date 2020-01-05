const arg = require('arg');
const database = require('./postgres');
const poster = require("./index");

exports.parseQuote = function parseQuotes(message) {
    const quoteArgs = message.match(/("[^"]+"|[^"\s]+)/g);

    if(quoteArgs.indexOf("-u") > -1) {
        if(quoteArgs.indexOf("-a") > -1) {
            if(typeof quoteArgs[4] !== 'string') {
                return;
            }
            const user = quoteArgs[4];
            const quote = quoteArgs[6];
            database.insertQuote(quote, user).then(r => console.log(r));
            return;
        }
        const userToQuery = quoteArgs[3];
        database.getQuoteFromUser(userToQuery).then(r => console.log(r));
    }
};