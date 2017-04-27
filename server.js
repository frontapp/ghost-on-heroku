const fs = require('fs');
const path = require('path');
const ghost = require('ghost');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
  fs.openSync('/tmp/app-initialized', 'w');
});
