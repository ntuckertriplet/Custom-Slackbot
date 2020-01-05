const Pool = require('pg').Pool;
const config = require('./config');
const pool = new Pool({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password,
    port: config.db.port,
});

exports.getAllQuotes = function getAllQuotes(){
    pool.query('SELECT * FROM quotes', (error, results) => {
        if(error) {
            throw error;
        }
        return results;
    });
};

exports.insertQuote = function insertQuote(quote, user) {
    const queryConfig = {
        text: 'INSERT INTO quotes (quote, quotedperson) VALUES($1, $2);',
        values: [quote, user]
    };
    pool.query(queryConfig, function (err) {
        if (err) { return console.error(err); }
    });
};


exports.getQuoteFromUser = function getQuoteFromUser(user) {
    user = user.replace(/^"(.*)"$/, '$1');
    const queryConfig = {
        text: `SELECT * FROM quotes WHERE quotedperson = \'${user}';`,
        value: [`${user}`]
    };

    try {
        const res = pool.query(queryConfig);
        if(typeof(res) === 'undefined') {
            console.log(res.rows[0])
        }
        console.log(res)
    } catch (err) {
        console.log(err.stack)
    }
};

