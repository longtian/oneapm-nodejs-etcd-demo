/**
 * Created by yan on 15-11-4.
 */
var etcd = require('../util/etcd.js');

module.exports = function (req, res) {
  etcd.get('/oneapm/timeservers', {
    recursive: true
  }, function (error, result) {

    if (result.node.nodes) {
      res.json(result.node.nodes.map(function (n) {
        return n.value
      }));
    } else {
      res.json([]);
    }
  });
}
