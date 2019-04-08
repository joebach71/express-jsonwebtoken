module.exports = {
    'secret': 'whateverido',
    'tokenExpiresIn': "1d",
    'refreshSecret': 'notwhateverid',
    "refreshTokenExpiresIn": "7d",
    'database': 'mongodb://localhost:27017',
    'port': 9001,
    redisOpts: {
        host: "localhost",
        port: 10002
    }
};