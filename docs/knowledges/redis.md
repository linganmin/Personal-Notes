# Redis

> Redis有5个基本数据结构，string、list、hash、set、zset。


## String

string 表示的是一个`可变`的字节数组，可以初始化字符串、获取字符串、获取字符串长度、获取字符串的子串、覆盖字符串的子串内容、追加子串。

Redis 的字符串是动态字符串，是可以修改的字符串，采用预分配冗余空间的方式来减少内存的频繁分配。字符串长度小于1M时，自动扩容（预分配）都是加倍现有的空间，当字符串超过1M后，扩容一次只会增加1M的空间。字符串的最大长度为`512M`

### 初始化字符串

> set key value [EX seconds] [PX milliseconds] [NX|XX]

```bash
set email saboran@163.com
OK
```
[点击阅读详细文档](http://redisdoc.com/string/set.html)

### 获取字符串内容

> get key

```bash
get email
"saboran@163.com"
```
[点击阅读详细文档](http://redisdoc.com/string/get.html)


### 获取字符串长度

> strlen key

```bash
strlen email
(integer) 15
```
[点击阅读详细文档](http://redisdoc.com/string/strlen.html)


### 获取字符串子串

> getrange key start end

```bash
getrange email 8 10
"163" 
```
[点击阅读详细文档](http://redisdoc.com/string/getrange.html)

### 覆盖字符串子串

> setrange key offset value

```bash
setrange email 8 gmail.com
(integer) 17
```

### 向字符串追加子串

> append key value

```bash
append email .xxx
(integer) 21
get email
"saboran@gmail.com.xxx"
```