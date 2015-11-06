/**
 * Created by youngmoon on 11/7/15.
 */

'use strict';

require('babel/register')({});

var server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
    console.log('Server listening on => ', PORT);
});