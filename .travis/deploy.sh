#!/bin/sh

deploy_env=$1;


if [ $deploy_env == "dev" ]
then
  echo "dev"
elif [ $deploy_env == "stgaing" ]
then
  echo "stagig"
elif [ $deploy_env == "prod" ]
then
  
  ssh travis@47.96.70.2 -o StrictHostKeyChecking=no <<remotessh

  cd /data/wwwroot/notes.linganmin.cn
  git checkout master
  git pull origin master

remotessh

fi

# echo $deploy_env;
# if
# ssh travis@47.96.70.2

