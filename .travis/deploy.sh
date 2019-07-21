#!/bin/sh

deploy_env=$1;


if [ $deploy_env == "dev" ]
then
  # todo

elif [ $deploy_env == "stgaing" ]
then
  # todo

elif [ $deploy_env == "prod" ]
then
  
  ssh travis@47.96.70.2 <<remotessh

  cd /data/wwwroot/notes.linganmin.cn
  git checkout master
  git pull

remotessh
fi
