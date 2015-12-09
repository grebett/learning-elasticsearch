'use strict'

let data = require('./data');

// new client
let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200', // elasticsearch's default port
  log: 'trace' // this logger prints directly to stdout very useful infos – for more infos, see: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html
});

// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-delete

client.delete({
  index: 'megacorp',
  type: 'employee',
  id: 1 // mandatory
}, (error, response) => {
  if (error) {
    console.error(error);
    return ;
  }

  console.log(response);
});