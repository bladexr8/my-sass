require('dotenv').config();

// by default, environment variables inside .env file are available on the
// server only. Whatever environmental variables are set in next.config.js
// will be available in the browser as well

module.exports = {
    env: {
        URL_APP: process.env.URL_APP,
        PORT_APP: process.env.PORT_APP,
        URL_API: process.env.URL_API
        // more env variables here...
    },
};