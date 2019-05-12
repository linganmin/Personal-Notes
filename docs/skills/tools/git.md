# GIT日常手记


## 版本库

### 版本库的示意图

![](http://ww1.sinaimg.cn/large/6aedb651gy1fsirsqqeptj20cq06iaa8.jpg)

### 版本库命令说明
- git init
    - 初始化/创建新仓库
- git add 
    - 把文件修改/添加到暂存区
- git commit 
    - 把暂存区的所有内容提交到当前分支


### 版本库命令详解

```bash
git init # 初始化当前工作区

git status # 查了当前工作区的状态

git add <filename> # 添加文件到暂存

git add -A # 提交所有变化到暂存

git add -u # 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)到暂存

git add . # 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件到暂存，Ps：在Git 2.x版本中 `git add .` === `git add -A`

git commit -m <本地提交的描述> # 将存入暂存区修改内容提交至本地仓库中

git commit -am <本地提交的描述> # 提交所有修改到暂存，并提交到本地仓库

```

## 分支

### 新建&切换分支

```bash
git branch # 列出所有分支，当前分支前面会标一个*号

git branch <branch name> # 创建新分支

git checkout <branch name> # 切换到指定分支

git checkout -b <branch name> # 创建新分支，并切换到新分支，例如：git checkout -b dev === git branch dev && git checkout dev

git checkout -b <local branch name> origin/<origin branch name> # 拉去远端的指定分支到本地
```

### 合并分支

```bash
git merge <branch name> # 当前分支合并指定分支
```

### 删除分支

```bash
git branch -d <branch name> # 删除指定分支

git push origin :<branch name> # 删除远端分支，分支前的冒号代表删除
```

## 远端地址

### 添加远端地址

```bash
git remote add origin <远端地址>  # 添加远端仓库地址

git push -u origin <branch name> # 提交到远端分支
```




## 操作远端分支

```bash
git branch -a # 查看有哪些远端分支

git push origin --delete <远端分支名称> # 删除指定远端分支

```

## 版本回退

```bash
git log # 显示提交日志，展示不那么漂亮

git log --pretty=oneline # 查看提交日志，在一行展示，更漂亮

git reset --hard [commit id] # 通过git log 查看提交历史以确定要回到的位置，并拿到想回到的commit id 执行之

git reflog # 查看所有执行的git命令 可以用来查找回滚之前的 commit id 在使用git reset --hard 回滚过去
```


## 标签

### 创建标签

> 切换到需要打标签的分支 `git checkout <branch name>`

> `git tag <tag name> [commit id]`

```bash
git tag v0.0.1 # 给当前commit创建一个新标签

git tag v0.9.0 f52c633 # 给指定commit创建一个新标签

```

### 查看所有标签

```bash
git tag 
```

### 给指定标签指定信息

> `git tag -a <tagname> -m ["标签信息"]`

### 远端标签

```bash
git push origin <tag name> # 推送指定标签到远端

git push origin --tags # 推送全部未推送的标签到远端
```

### 删除指定标签

```bash
git tag -d <tag name> # 删除本地指定标签

git push origin :refs/tags/<tag name> # 删除远端指定标签
```