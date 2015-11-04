/**
 * Created by yan on 15-11-4.
 */

var redis = require('redis');
var etcd = require('../util/etcd.js');
var redis_host = etcd.getSync('/oneapm/redis/master', {wait: true}).body.node.value;
var client;

connectOrReconnet(redis_host);

var watcher = etcd.watcher('/oneapm/redis/master');
watcher.on('set', function (payload) {
  connectOrReconnet(payload.node.value);
});

function connectOrReconnet(redis_host) {
  client = redis.createClient('redis://' + redis_host);
  client.on('error', function () {
    client.end();
  });
  client.on('connect', function () {
    console.log('connected to redis server %s', redis_host);
  });
}

module.exports = function (req, res) {
  client.info(function (error, result) {
    res.end(result);
  })
}