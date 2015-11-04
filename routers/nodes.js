/**
 * Created by yan on 15-11-4.
 */
var etcd = require('../util/etcd.js');

module.exports = function (req, res) {
  etcd.get('/', {
    recursive: true
  }, function (error, nodes) {
    res.json(nodes.node);
  });
}


