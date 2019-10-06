# 初始化一台CentOS服务器

## 常规操作

- yum自更新

 > yum update

- 安装常用软件

  > yum install -y wget vim git

- 生成秘钥对

  > ssh-keygen

## 永久关闭selinux

> vim /etc/sysconfig/selinux

将`SELINUX=enforcing`改为`SELINUX=disabled`

## 关闭默认防火墙启用iptables防火墙

- 停止firewall

  > systemctl stop firewalld.service

- 禁止firewall开机启动

  > systemctl disable firewalld.service 

- 查看默认防火墙状态

  > firewall-cmd --state

- 安装 iptables

  > yum install -y iptables-services

- 启动 iptables

  > systemctlre start iptables.service

- 设置防火墙开机启动

  > systemctlenable iptables.service

## 安装zsh

- 安装

  > yum install -y zsh

- 将zsh设置成默认shell

  > chsh -s /bin/zsh

- 安装 oh-my-zsh

  > wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

- 安装 zsh-autosuggestions

  > git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

编辑 `~/.zshrc`

```conf
plugins=(zsh-autosuggestions)

```
