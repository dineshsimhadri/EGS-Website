#!/usr/bin/env node
require('babel-register');

const config = require('../config').default;
const server = require('../server/main.js').default;
const host = config.server_host
const port = config.server_port

if (config.env === 'development') {
  require('css-modules-require-hook')({
    extensions: ['.scss']
  })
}

server.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`)
  }
});
