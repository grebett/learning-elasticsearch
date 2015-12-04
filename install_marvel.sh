#config
ELASTICSEARCH="elasticsearch-2.1.0"
KIBANA="kibana-4.3.0-darwin-x64"

#installing marvel into elasticsearch
printf "\033[1;35;40m%s\033[0m\n" "=> Installing Marvel into Elasticsearch"
$ELASTICSEARCH/bin/plugin install license
if [ $? -ne 0 ]
then
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while installing Marvel into Elasticsearch. For more informations, see upper!";
  exit 1;
fi
$ELASTICSEARCH/bin/plugin install marvel-agent
if [ $? -ne 0 ]
then
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while installing Marvel into Elasticsearch. For more informations, see upper!";
  exit 1;
fi

#installing marvel into kibana
printf "\033[1;35;40m%s\033[0m\n" "=> Installing Marvel into Kibana"
$KIBANA/bin/kibana plugin --install elasticsearch/marvel/latest
if [ $? -ne 0 ]
then
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while installing Marvel into Kibana. For more informations, see upper!";
  exit 1;
fi

