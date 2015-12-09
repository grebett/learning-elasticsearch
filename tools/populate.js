'use strict';
let chalk = require('chalk');
let Event = require('events').EventEmitter;
let test = new Event();


function deleteIndexSafe (client, index) {
  return new Promise((resolve, reject) => {
    client.indices.exists({index: index}).then(
      success => {
        if (success === true) {
          client.indices.delete({index: index}).then(
            success => {
              console.log(success);
              resolve(`Previous ${index} index existed: now deleted!`);
            },
            error => {
              reject(error.message);
            }
          );
        }
        else {
          resolve(`No previous existing ${index}!`);
        }
      },
      error => {
        reject(error.message);
      }
    );
  });
}

let populate = function (client, path, data) {
  let splitPath = path.split('/'); // path follows this pattern: 'index/type'
  let index = splitPath[0], type = splitPath[1];

  deleteIndexSafe(client, index).then(
    success => {
      console.log(chalk.magenta.bold('=> ' + success));
      data.forEach(element => {
        client.create({
          index: index,
          type: type,
          body: element
        }, (error, response) => {
          console.assert(!error, !error ? null : error.message);
        })
      });
    },
    error => {
      console.error(error);
    }
  );
};

module.exports = populate;