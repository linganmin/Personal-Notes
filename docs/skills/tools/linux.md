# Linux 知识

## Vim 编辑器常用命令

```bash
ctrl + f # 屏幕『向下』移动一页

ctrl + b # 屏幕『向上』移动一页

n + [space](n为数字，space空格键) # 按下数字后再按空格键，光标会向右移动这一行的 n 个字符。例如 20[space] 则光标会向后面移动 20 个字符距离。

0 # 这是数字『 0 』：移动到这一行的最前面字符处

$ # 移动到这一行的最后面字符处

G # 移动到这个档案的最后一行

nG # n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行

n + [Enter] # n 为数字。光标向下移动 n 行

dd # 删除游标所在的那一整行

ndd # n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行

yy # 复制游标所在的那一行

nyy # n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行

set nu # 设置显示行号

set nonu # 设置不显示行号

ctrl + z #最小化

fg # 恢复最小化
```

## Linux 命令

- df
  - 显示磁盘统计空间

    ```bash
    df -h
    文件系统        容量  已用  可用 已用% 挂载点
    /dev/vda1        40G  5.3G   32G   15% /
    devtmpfs        909M     0  909M    0% /dev
    tmpfs           920M     0  920M    0% /dev/shm
    tmpfs           920M  444K  919M    1% /run
    tmpfs           920M     0  920M    0% /sys/fs/cgroup
    tmpfs           184M     0  184M    0% /run/user/0
    ```

- free
  - 于显示内存状态

    ```bash
    free -m
    total        used        free      shared  buff/cache   available
    Mem:           1838         265         981           0         591        1395
    Swap:          2047           0        2047
    ```

- 怎么查看各个 cpu 的资源占用情况？
  
  这个就是 top 命令进去之后按数字 1 了

- 如果进程 cpu 占用很高 ，一般是发生在那些部分
