/**
 * Created by yan on 15-11-4.
 */
var Etcd = require('node-etcd');
var etcd = new Etcd(['127.0.0.1:4002']);
module.exports = etcd;