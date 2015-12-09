'use strict'

// new client

let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'localhost:9200', // elasticsearch's default port
  log: 'trace' // this logger prints directly to stdout very useful infos – for more infos, see: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html
});

// populate #uncomment if you need to populate the database — be caution, the populate is asynchronous ; if needed, add an EventEmitter or a Promise
// let populate = require('./tools/populate');
// populate(client, 'megacorp/employee', require('./data'));

client.search({
  index: 'megacorp',
  body: {
    query: {
      match: {
        'first_name': 'Rosalyn'
      }
    }
  }
}, (error, response) => {
  console.assert(!error, !error ? null : error.message);

  let hits = response.hits;

  console.log(hits.hits);
});
