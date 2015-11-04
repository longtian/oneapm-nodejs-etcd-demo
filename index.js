/**
 * Created by yan on 15-11-3.
 */
require('oneapm');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/nodes', require('./routers/nodes.js'));
app.get('/timeservers', require('./routers/timeservers.js'));
app.get('/redis', require('./routers/redis.js'));

app.listen(8000);


