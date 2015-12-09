# Learning Elasticsearch
While discovering a whole new tool, it's quite mandatory to follow the advised tutorials. This repository will thus contain my personal exercices based on
[Elasticsearch: the Definitive Guide](https://github.com/grebett/learning-elasticsearch.git) tutorial.

# Exercises?

What I call exercises are not formal question I answer to but more a code snippet created to test and illustrate a peculiar notion. The language I've chosen is JavaScript (with some ES6 features), and, accordingly, API is [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html).

# How to navigate between exercises

Instead of creating a new branch for all exercises, I've preferred the usage of tags. You can select them in the `branch` dropdown menu, then `tags` tab. You can also retrieve each exercise in the `releases` tab menu.

# Caveat
Consider that the mentionned tutorial has been written for Elasticsearch `v1.4`, but, at the time of writing this `README.md` file, Elasticsearch is `v2.1`. Some adjustements must then be done, even though the tutorial is supposed to follow the edge version. Installing Elasticsearch and its plugins has been changed drastically. Use the `install_*.sh` files to perform an up-to-date correct installation.