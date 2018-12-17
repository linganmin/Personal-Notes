# Redis

> Redis有5个基本数据结构，string、list、hash、set、zset。


## String

string 表示的是一个`可变`的字节数组，可以初始化字符串、获取字符串、获取字符串长度、获取字符串的子串、覆盖字符串的子串内容、追加子串。

Redis 的字符串是动态字符串，是可以修改的字符串，采用预分配冗余空间的方式来减少内存的频繁分配。字符串长度小于1M时，自动扩容（预分配）都是加倍现有的空间，当字符串超过1M后，扩容一次只会增加1M的空间。字符串的最大长度为`512M`

### 初始化字符串

> set key value [EX seconds] [PX milliseconds] [NX|XX]

```bash
127.0.0.1:6379> set email saboran@163.com
OK
```
[点击阅读详细文档](http://redisdoc.com/string/set.html)

### 获取字符串内容

> get key

```bash
127.0.0.1:6379> get email
"saboran@163.com"
```
[点击阅读详细文档](http://redisdoc.com/string/get.html)


### 获取字符串长度

> strlen key

```bash
127.0.0.1:6379> strlen email
(integer) 15
```
[点击阅读详细文档](http://redisdoc.com/string/strlen.html)


### 获取字符串子串

> getrange key start end

```bash
127.0.0.1:6379> getrange email 8 10
"163" 
```
[点击阅读详细文档](http://redisdoc.com/string/getrange.html)

### 覆盖字符串子串

> setrange key offset value

```bash
127.0.0.1:6379> setrange email 8 gmail.com
(integer) 17
```

[点击阅读详细文档](http://redisdoc.com/string/setrange.html)


### 向字符串追加子串

> append key value

```bash
127.0.0.1:6379> append email .xxx
(integer) 21
get email
"saboran@gmail.com.xxx"
```

[点击阅读详细文档](http://redisdoc.com/string/append.html)


### 计数器

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

#### 简写

`incr key` 等于 `incrby key 1`

`decr key` 等于 `decrby key 1`
