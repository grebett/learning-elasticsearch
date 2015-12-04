#config
VERSION="2.1.0"
NAME="elasticsearch-$VERSION"
FILE="$NAME.tar.gz"
DIRECTORY="."

#creating directory if needed
mkdir -p $DIRECTORY
cd $DIRECTORY

#downloading elasticsearch
printf "\033[1;35;40m%s\033[0m\n" "=> Downloading $FILE"
curl -L -O https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/tar/elasticsearch/2.1.0/elasticsearch-2.1.0.tar.gz
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE downloaded!"
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while downloading $FILE. For more informations, see upper!";
  exit 1;
fi

#uncompressing elasticsearch
printf "\033[1;35;40m%s\033[0m\n" "=> Uncompressing $FILE"
tar -xvf $FILE
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE uncompressed!";
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while uncompressing $FILE. For more informations, see upper!";
  exit 1;
fi

#deleting elasticsearch archive
printf "\033[1;35;40m%s\033[0m\n" "=> Deleting $FILE"
rm -rf $FILE
if [ $? -eq 0 ]
then
  printf "\033[1;32;40m%s\033[0m\n" "=> $FILE deleted!"
else
  printf "\033[1;31;40m%s\033[0m\n" "=> Error while deleting $FILE. For more informations, see upper!";
  exit 1;
fi