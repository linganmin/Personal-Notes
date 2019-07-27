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
  
  ssh -t travis@47.96.70.2 -o StrictHostKeyChecking=no <<remotessh

  cd /data/wwwroot

  if [ ! -d "notes.linganmin.cn" ]; then
    sudo mkdir notes.linganmin.cn
  fi

  sudo chown -R travis:travis notes.linganmin.cn

  exit;
remotessh

  yarn

  yarn build

  rm -rf node_modules

  chmod -R +r docs/.vuepress/dist

  git stash
  
  rsync -azr -vv --delete  docs/.vuepress/dist/ travis@47.96.70.2:/data/wwwroot/notes.linganmin.cn/

  ssh -t travis@47.96.70.2 -o StrictHostKeyChecking=no <<remotessh
  cd /data/wwwroot/

  sudo chown -R www:www notes.linganmin.cn
  
  exit
remotessh

fi


