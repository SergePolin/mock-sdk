const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
    },
    production: {
        port: process.env.PORT || 80,
    },
};

module.exports = config[env];
