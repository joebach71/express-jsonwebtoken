const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);

const config = require('../config');
const RedisClient = redis.createClient(config.redisOpts || {});

module.exports = RedisClient;