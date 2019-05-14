# Redis

## Redis 类型，使用场景

Redis 支持更加丰富的数据存储类型，String、Hash、List、Set 和 Sorted Set。Memcached 仅支持简单的 key-value 结构。

- String：key=>value set get decr incr
- Hash: 存放结构化数据 hset hget hgetall
- List: 消息队列、列表 lpush rpush lpop rpop lrange
- Set: 不重复的无序集合，某些需要去重的列表 sadd spop smembers
- Sorted Set 有序集合，比 set 多分数，根据分数自懂排序 zadd zrange zrem zcard

## Redis 如何实现持久化？

- RDB 持久化，将 redis 在内存中的的状态保存到硬盘中，相当于备份数据库状态。

- AOF 持久化（Append-Only-File），AOF 持久化是通过保存 Redis 服务器锁执行的写状态来记录数据库的。相当于备份数据库接收到的命令，所有被写入 AOF 的命令都是以 redis 的协议格式来保存的。

## Redis过期机制

Redis采用惰性删除和定期删除两种策略

- 惰性删除
  每次访问前先看看是不是过期了，过期的话就进行删除
- 定期删除
  ？？

## 设置过期时间

- 通用

  ```bash
  expire key time(以秒为单位)
  ```

- 字符串特有

  ```bash
  setex(string key, int seconds, string value)
  ```

## Pileline

Redis本身是基于Request/Response协议的，正常情况下，客户端发送一个命令，等待Redis应答，Redis在接收到命令，处理后应答。在这种情况下，如果同时需要执行大量的命令，那就是等待上一条命令应答后再执行，这中间不仅仅多了RTT（Round Time Trip），而且还频繁的调用系统IO。

为了提升效率，这时候Pipeline出现了，它允许客户端可以一次发送多条命令，而不等待上一条命令执行的结果，这和网络的Nagel算法有点像（TCP_NODELAY选项）。不仅减少了RTT，同时也减少了IO调用次数（IO调用涉及到用户态到内核态之间的切换）

## Redis 类型

### String

string 表示的是一个`可变`的字节数组，可以初始化字符串、获取字符串、获取字符串长度、获取字符串的子串、覆盖字符串的子串内容、追加子串。

Redis 的字符串是动态字符串，是可以修改的字符串，采用预分配冗余空间的方式来减少内存的频繁分配。字符串长度小于 1M 时，自动扩容（预分配）都是加倍现有的空间，当字符串超过 1M 后，扩容一次只会增加 1M 的空间。字符串的最大长度为`512M`

#### 初始化字符串

> set key value [EX seconds][px milliseconds] [NX|XX]

```bash
127.0.0.1:6379> set email saboran@163.com
OK
```

[点击阅读详细文档](http://redisdoc.com/string/set.html)

#### 获取字符串内容

> get key

```bash
127.0.0.1:6379> get email
"saboran@163.com"
```

[点击阅读详细文档](http://redisdoc.com/string/get.html)

#### 获取字符串长度

> strlen key

```bash
127.0.0.1:6379> strlen email
(integer) 15
```

[点击阅读详细文档](http://redisdoc.com/string/strlen.html)

#### 获取字符串子串

> getrange key start end

```bash
127.0.0.1:6379> getrange email 8 10
"163"
```

[点击阅读详细文档](http://redisdoc.com/string/getrange.html)

#### 覆盖字符串子串

> setrange key offset value

```bash
127.0.0.1:6379> setrange email 8 gmail.com
(integer) 17
```

[点击阅读详细文档](http://redisdoc.com/string/setrange.html)

#### 向字符串追加子串

> append key value

```bash
127.0.0.1:6379> append email .xxx
(integer) 21
get email
"saboran@gmail.com.xxx"
```

[点击阅读详细文档](http://redisdoc.com/string/append.html)

#### 计数器

如果字符串的内容是一个整数，那么还可以将字符串当成计数器来使用

```bash
127.0.0.1:6379> set num 1
OK
127.0.0.1:6379> get num
"1"
```

> incrby key increment

> decrby key decrement

```bash
127.0.0.1:6379> incrby num 10
(integer) 11
127.0.0.1:6379> get num
"11"
127.0.0.1:6379> decrby num 2
(integer) 9
127.0.0.1:6379> get num
"9"
```

##### 简写

`incr key` 等于 `incrby key 1`

`decr key` 等于 `decrby key 1`

### List

Redis 中的 list 是用于存储多个有序的字符串，列表是一种比较灵活的数据结构可充当`堆栈`和`队列`的角色。

在 Redis 中 list 的存储结构用的是链表（双向链表）而不是数组，因为它是链表，所以随机定位性能较弱，首尾插入删除性能好。

`队列`/`堆栈`链表可以从表头和表尾追加移除元素，在 Redis 中`list`结构结合`rpush`、`rpop`、`lpush`、`lpop`四条命令，可以将链表作为队列或堆栈使用。

#### 右进左出

```bash
127.0.0.1:6379> rpush queue JS
(integer) 1
127.0.0.1:6379> rpush queue PHP Golang
(integer) 3
127.0.0.1:6379> lrange queue 0 -1 # 列出queue中所有的值
1) "JS"
2) "PHP"
3) "Golang"
127.0.0.1:6379> lpop queue
"JS"
127.0.0.1:6379> lpop queue
"PHP"
127.0.0.1:6379> lpop queue
"Golang"
127.0.0.1:6379> lrange queue 0 -1
(empty list or set)
```

#### 右进右出

```bash
127.0.0.1:6379> rpush languages zh
(integer) 1
127.0.0.1:6379> rpush languages en
(integer) 2
127.0.0.1:6379> rpush languages dz
(integer) 3
127.0.0.1:6379> lrange languages 0 -1
1) "zh"
2) "en"
3) "dz"
127.0.0.1:6379> rpop languages
"dz"
127.0.0.1:6379> rpop languages
"en"
127.0.0.1:6379> rpop languages
"zh"
```

#### list 长度

> llen key

```bash
127.0.0.1:6379> llen languages
(integer) 0
```

#### 读取指定位置的元素

> lindex key index

```bash
127.0.0.1:6379> lindex languages 2
"zh"
```

#### 读取指定位置区间的元素

> lrange key start stop

```bash
127.0.0.1:6379> lrange languages 1 2
1) "en"
2) "zh"

# 获取list中的所有元素
127.0.0.1:6379> lrange languages 0 -1
1) "dz"
2) "en"
3) "zh"
```

#### 修改元素

> lset key index value

```bash
127.0.0.1:6379> lset languages 1 kr
OK
127.0.0.1:6379> lrange languages 0 -1
1) "dz"
2) "kr"
3) "zh"
```

#### 插入元素(极少使用)

> linsert key BEFORE|AFTER pivot value

```bash
127.0.0.1:6379> linsert languages before zh jp
(integer) 4
127.0.0.1:6379> lrange languages 0 -1
1) "dz"
2) "kr"
3) "jp"
4) "zh"
```

#### 删除元素

> lrem key count value

```bash
127.0.0.1:6379> lrem languages 1 dz
(integer) 1
127.0.0.1:6379> lrange languages 0 -1
1) "kr"
2) "jp"
3) "zh"
```

#### 定长列表 ???????

> ltrim key start stop

```bash

```

#### 左进左出

> lpush key value [value ...] # 左进

> lpop key # 左出

> blpop key [key ...] timeout # 阻塞左出

#### 右进右出

> rpush key value [value ...] # 左进

> rpop key # 左出

> rlpop key [key ...] timeout # 阻塞左出

#### 使用场景

- lpush + lpop = stack(栈)
- lpush + rpop = queue(队列)
- lpush + ltrim = capped collection(有限集合)
- lpush + brpop = message queue(消息队列)
