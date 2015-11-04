/**
 * Created by yan on 15-11-4.
 */
var os = require('os');
process.env.ONEAPM_APP_NAME = os.hostname() + process.version;

var app = require('express')();
var oneapm = require('oneapm');
app.get('/time', function (req, res) {
  res.header('Refresh', '1');
  res.end("" + Date.now() + ' ' + os.hostname());
});
app.listen(80);