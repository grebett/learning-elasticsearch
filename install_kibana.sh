#config
VERSION="4.3.0"
NAME="kibana-$VERSION-darwin-x64"
FILE="$NAME.tar.gz"
DIRECTORY="."

#creating directory if needed
mkdir -p $DIRECTORY
cd $DIRECTORY

#downloading Kibana
printf "\033[1;35;40m%s\033[0m\n" "=> Downloading $FILE"
curl -L -O https://download.elastic.co/kibana/kibana/$FILE
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE downloaded!";
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while downloading $FILE. For more informations, see upper!";
  exit 1;
fi

#uncompressing kibana
printf "\033[1;35;40m%s\033[0m\n" "=> Uncompressing $FILE"
tar -xvf $FILE
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE uncompressed!";
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while uncompressing $FILE. For more informations, see upper!";
  exit 1;
fi

#deleting kibana archive
printf "\033[1;35;40m%s\033[0m\n" "=> Deleting $FILE"
rm -rf $FILE
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE deleted!"
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while deleting $FILE. For more informations, see upper!";
  exit 1;
fi

#configuration kibana
printf "\033[1;35;40m%s\033[0m\n" "=> Updating config/kibana.yml to work with Elasticsearch"
sed -i.bak s/"# elasticsearch.url"/elasticsearch.url/g $NAME/config/kibana.yml
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> config/kibana.yml updated!"
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while updating config/kibana.yml. For more informations, see upper!";
  exit 1;
fi
