'use strict'

// new client
let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200', // elasticsearch's default port
  log: 'trace' // this logger prints directly to stdout very useful infos – for more infos, see: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html
});

client.ping({
  requestTimeout: Infinity,
  hello: 'elasticsearch-2.1.0'
})
.then(function (body) {
  console.log(body);
}, function (error) {
  console.error(error);
});
