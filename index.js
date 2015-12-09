'use strict'

// new client
let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200', // elasticsearch's default port
  log: 'trace' // this logger prints directly to stdout very useful infos – for more infos, see: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html
});

// populate
let populate = require('./tools/populate');

populate(client, 'megacorp/employee', require('./data'));