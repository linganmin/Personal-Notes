# PHP

## 基础知识

- isset() 和 empty() 的区别
  - isset() 检查变量是否包含值`false`,`0`,`''`，当值为`null`或变量不存在时返回`false`,其余均返回`true`。
  - empty() 检查变量是否为`''`,`0`,`null`,`false`,返回true,其余值均返回`false`
- 字符串处理函数 区别 mb_ 系列函数
  字符串处理函数是处理单字节字符的，如英文，数字；mb_ 系列函数可以有效的处理多字节字符，如中文，日文。如果使用单字节字符函数比如`substr()`截取带有中文的字符串时会出现乱码。
- static、$this、self 区别
  - todo
  - todo
- 接口与抽象类应用场景区别
  - 抽象类是用来捕捉子类的通用特性的
  - 抽象类是 is a关系；而接口是has a关系
  - 接口只有常量和方法，抽象类则包含普通类中的一切机构
  - 接口中的方法都必须是public类型的，而抽象类则不受限制
  - 一个类可以同时实现多个接口，但一个类只能继承一个抽象类
  - 抽象类中可以定义普通的带有方法体的方法，而接口不行
- 面向对象的特征
  - 封装
    把客观的事物封装成抽象的类，类可以将自身的数据和方法给可信的类或对象操作，对不可信的进行隐藏信息。
  - 继承
    可以在现有类的基础上无需重写，扩展类的功能
  - 多态
    允许将子类类型的指针赋值给父类类型的指针

- 面向对象的优点和缺点
  - 优点
    - 复用性
    - 封装性、抽象性。结构清晰，易于理解，可读性强
    - 继承特性易于扩展
  - 缺点
    - 执行速度回打折扣
    - 会造成过度封装

- 如何快速找出一万个数字中最小的 50 个

  采用局部淘汰法。选取前 50 个元素，并排序，记为序列 L。然后依次扫描剩余的元素 x，与排好序的 50 个元素中最大的元素比，如果比这个最大的要小，那么把这个最大的元素删除，并把 x 利用插入排序的思想，插入到序列 L 中。依次循环，知道扫描了所有的元素。复杂度为 O(1w\*50)。
- php 统计数组元素个数的内置函数

  count 函数中如果 mode 被设置为 COUNT_RECURSIVE（或 1），则会递归底计算多维数组中的数组的元素个数。如果不设置 mode 默认为 0 。不检测多维数组
- include 和 require 的区别

  - 找不到指定文件时，include 语句结构提示`warning`并继续执行，require 语句结构提示`error`并停止执行（官网说明）
  - include 有返回值，require 没有返回值
  - require 会将目标文件的内容读取，并且将自己本身代换成这些读入的内容，这个读取并且代换的动作是在 PHP 引擎编译程序代码的时候发生的，而不是 PHP 引擎开始执行编译好的程序代码的时候
  - include 是在执行 PHP 引擎已经编译完成的代码的时候将目标文件的内容替换本身

- array_merge 和 + 的区别

  - `+` 既考虑数字索引的键值对,也考虑字符串索引的键值对, 用前边数组的值覆盖后边的键名相同的值
  - array_merge 只考虑字符串索引的键值对, 用后边数组的值覆盖掉前面数组中键名相同的值，数字索引的值则不覆盖,同时保留,重建索引

- PHP7 新特性

  - 空合并操作符 ??
  - Throwable
  - 一次捕捉多种类型的异常 / 错误 PHP 7.1 新添加了捕获多种异常/错误类型的语法通过竖杠“|”来实现。
  - 性能提升了两倍
  - 标量类型声明
  - 返回类型声明
  - 为什么 PHP7 比 PHP5 性能提升了
    - 变量存储字节减小，减少内存占用，提升变量操作速度
    - 改善数组结构，数组元素和 hash 映射表被分配在同一块内存里，降低了内存占用、提升了 cpu 缓存命中率
    - 改进了函数的调用机制，通过优化参数传递的环节，减少了一些指令，提高执行效率

- composer

  composer 是 PHP 的一个依赖管理工具。工作原理就是将已开发好的扩展包从 packagist.org composer 仓库下载到我们的应用程序中，并声明依赖关系和版本控制。

  - PSR-4 自动加载规范
  - PSR-0 classmap file
  - PSR-1 PSR-2 编码风格规范
  - PSR-3 日志记录器接口
  - PSR-6 缓存接口规范
  - PSR-7 缓存接口规范

- 基本函数

  - 你知道哪些 PHP 自带的数组排序方法？
    - sort() 函数用于对数组单元从低到高进行排序。
    - rsort() 函数用于对数组单元从高到低进行排序。
    - asort() 函数用于对数组单元从低到高进行排序并保持索引关系。
    - arsort() 函数用于对数组单元从高到低进行排序并保持索引关系。
    - ksort() 函数用于对数组单元按照键名从低到高进行排序。
    - krsort() 函数用于对数组单元按照键名从高到低进行排序。

- intval() 和 (int) 转换的区别
  转换效率 (int) > intval()

  - (int) 生成的 opcode 指令数少于 intval()；
  - (int) 是直接使用“CAST”指令的方式来实现类型转换；
  - intval() 是通过调用 zend_internal_function 类型的 intval 函数的方式来实现类型转换；

### 数组常用函数

- array_chage_key_case(array $arr,[int CASE_LOWER|CASE_UPPER])
  - 将数组的键全部小写|大写
- array_chunk(array $arr,int $size,[bool $preserve_keys])
  - 将一个数组分割成多个，其中每个单元数目由size决定，preserve_keys为true表示保留输入数组原来的键名，默认为false
- array_column(array $arr,mixed $cloumn_key,[mixed $index_key])
  - 返回多维数组指定为column_key列的值，如果指定了$index_key,则使用多维数组的该列的值作为返回数组对应的值的键
- array_combine(array $keys,array $values)
  - 创建一个数组，用一个$keys的值作为数组的键，用$values的值作为数组的值。$keys 和 $values 的数组长度要相同
- array_count_values(array $arr)
  - 统计数组中所有的值的出现次数,返回结果是一个数组，该数组的键是原数组的值，该数组的值是原数组的值出现的次数
- array_diff_assoc(array $arr1, array $arr2,[array $arr...])
  - 带索引比较多个数组差集
- array_diff_uassoc(array $arr1, array $arr2,[array $arr...])
  - 用提供的回调函数做索引检查来计算数组的差集
- array_diff_key(array $arr1, array $arr2,[array $arr...])
  - 使用键名比较计算数组的差集
- array_diff_ukey(array $arr1, array $arr2,[array $arr...])
  - 用回调函数对键名比较计算数组的差集
- array_diff(array $arr1, array $arr2,[array $arr...])
  - 对比 array1 和其他一个或者多个数组，返回在 array1 中但是不在其他 array 里的值。
- array_fill_keys(array $keys,mixed $value)
  - 使用value参数的值作为值，使用keys数组中的键来填充一个数组
- array_fill(int $start_index,int $num,mixed $value)
  - 用value填充一个数组的num个条目，索引值从start_index开始
- array_filter(array $array[,callable $callback,[,int $flag=0]])
  - 依次将array数组的每个值传递到callback函数，如果callback函数返回true，则该值会在返回的数组中，数组的键名保持不变
- array_flip(array $array)
  - 交换数组中的键和值
- array_intersect_assoc(array $arr1, array $arr2[,array $arr3])
  - 带索引检查计算数组的交集
- array_intersect_key(array $arr1, array $arr2[,array $arr3])
  - 使用键名比较计算数组的交集
- array_intersect(array $arr1, array $arr2[,array $arr3])
  - 计算数组的交集，返回结果保留原键名不变
- array_key_exists(mixed $key , array $array)
  - 检查数组中是否有指定的键名或索引
- array_key_first(array $array)
  - 获取数组的第一个key
- array_key_last(array $array)
  - 获取数组的最后一个key
- array_keys(array $array)
  - 获取数组的所有key

## composer 自动加载原理

composer加载核心思想是通过composer的配置文件在引用入口文件(autoload.php)时,将类和路径的对应关系加载到内存中,最后将具体加载的实现注册到spl_autoload_register函数中.最后将需要的文件包含进来.

## 魔术方法

- __get & __set

  调用类中不存在或者没有权限访问的属性的时候，PHP会默认调用
- __call & __callStatic

  当调用类中一个不存在或者没有权限访问的方法的时候，就会自动调用__call()方法。和__call对应静态方法的调用是__callStatic

## PHP 运行模式

- web 模式
- cli 模式

## 设计模式

### 单例模式

单例模式又称为职责模式，它用来在程序中创建一个单一功能的访问点，也就是实例化出来的对象是唯一的。

实际项目中像`数据库查询`,`日志输出`,`统一校验`等模块，这些模块功能单一，但需要多次访问，如果能全局唯一，多次复用会大大提升性能。这就是单例存在的必要性。

### 工厂模式

用工厂方法或者类生成对象，而不是代码中直接使用`new`关键字

- 工厂模式的最大优点在于创建对象上面，就是把创建对象的过程封装起来
- 根据不同的参数生成不同的类实例，那么就符合工厂模式的设计思想

### 观察者模式

- 定义：当一个对象状态发生改变时，依赖他的对象全部得到通知
- 优点：低耦合、非侵入式

### 策略模式

todo

## 常键排序&算法

- 斐波那契数列

  ```php
  // 递归实现
  function f($n){

    if($n === 0 || $n === 1){
      return 1;
    }

    return f($n-1) + f($n-2);
  }

  // 数组实现
  function f2($n){
    $res = [];

    $res[0] = 1;
    $res[1] = 1;

    for ($i=2; $i <= $n; $i++) {
      $res[$i] = $res[$i - 1] + $res[$i -2];
    }

    return $res;
  }

  ```

- 排序算法

  - 冒泡

    ```php
      /**
       * 冒泡排序 时间复杂度 O(n^2)
       */
      function bubbleSort(array $a){

        $len = count($a);

        for ($i=0; $i < $len; $i++) {
          for ($j=0; $j < $len-$i-1; $j++) {
            if($a[$j+1] < $a[$j]){
              $temp = $a[$j+1];
              $a[$j+1] = $a[$j];
              $a[$j] = $temp;
            }
          }
        }

        return $a;
      }
    ```

  - 快排

    ```php
     /**
      * 快速排序 最差时间复杂度O(N^2)，平均时间复杂度为O(NlogN)
      */
      function quickSort(array $a){

        $len =  count($a);

        if($len <= 1){
          return $a;
        }

        $pivot = $a[0];

        $left = $right = [];

        for ($i=1; $i < $len; $i++) {
          if($a[$i] < $pivot){
            $left[] = $a[$i];
          }else {
            $right[] = $a[$i];
          }
        }

        $left = quickSort($left);
        $right = quickSort($right);

        return array_merge($left,[$pivot],$right);
      }
    ```

  - 选择

    ```php
       /**
        * @param 选择排序法
        * 每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完
        *
        */
    ```

  - 插入

    ```php
     /**
      * 插入排序法
      * 每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。
      *
      */
    ```

## Laravel

### 服务容器

- Laravel IOC ServiceProvider

  服务提供者是所有 Laravel 应用程序引导启动的中心, Laravel 的核心服务器、注册服务容器绑定、事件监听、中间件、路由注册以及我们的应用程序都是由服务提供者引导启动的。

  IoC（Inversion of Control）译为 「控制反转」，也被叫做「依赖注入」(DI)。什么是「控制反转」？对象 A 功能依赖于对象 B，但是控制权由对象 A 来控制，控制权被颠倒，所以叫做「控制反转」，而「依赖注入」是实现 IoC 的方法，就是由 IoC 容器在运行期间，动态地将某种依赖关系注入到对象之中。
  其作用简单来讲就是利用依赖关系注入的方式，把复杂的应用程序分解为互相合作的对象，从而降低解决问题的复杂度，实现应用程序代码的低耦合、高扩展。

  依赖注入只是一种模式：把当前类依赖的第三方实例通过参数传入的形式引入，但是如果手写依赖注入会比较费劲，管理起来也比较麻烦，因为要关心那么多类的依赖，于是就有了一个容器来自动解决这个问题，利用反射 API 检查类型，然后递归解决依赖。

### 路由加载实现

> todo

## Swoole

> TODO

## Opcache

PHP解释器在执行PHP脚本时会解析PHP脚本代码，把PHP代码编译成一系列zend操作码，然后执行操作码。每次请求PHP文件都是这样，这样会消耗很多资源。如果PHP源码不变，相应的操作码也不会变，就没有每次都重新生成Opcode的必要，结合在Web应用中无处不在的缓存机制，我们可以把首次生成的Opcode缓存起来，这样下次直接从缓存取。

字节码缓存能存储预先编译好的PHP字节码，这样，下次请求PHP脚本时，PHP解释器不用每次读取、解析和编译PHP代码，直接从内存中读取预先编译好的字节码，然后立即执行，这样能省很多时间，极大提升应用的性能。

## PHP-FPM + Nginx 的工作机制

- 启动 PHP-FPM 服务 + Nginx 服务

  启动 PHP-FPM 会启动两种类型的进程： Master 主进程和 Worker（cgi 进程） 子进程。Master 进程负责监控端口、分配任务，管理 Worker 进程。Worker 进程就是 PHP 的 CGI 程序，负责解释编译执行 PHP 脚本。

  启动 Nginx : 首先会载入 `ngx_http_fastcgi_module` 模块，初始化 FastCGI 执行环境，实现 FastCGI 执行环境，实现 FastCGI 协议请求代理。

- 请求 -> Nginx

  > Nginx 接收请求，并基于 `location` 配置，选择一个合适的 handler

- Nginx -> PHP-FPM Master 进程

  > Nginx 通过 TCP socket/Unix Socket 把请求转发给 PHP-FPM Master 进程

- PHP-FPM Master 进程 -> PHP-FPM Worker 子进程

  > PHP-FPM Master 进程接收到请求，分配给 Worker 进程执行 PHP 脚本，如果没有空闲的 Worker 返回 502 错误。 Worker 进程执行 PHP 脚本,如果执行超时，返回 504 错误。处理完成，返回结果

- 返回处理结果：PHP-FPM Worker 子进程 -> PHP-FPM Matser 主进程 -> Nginx

  - Worker 子进程 返回处理结果，关闭连接，等待下一个请求
  - Master 进程通过 Socket 返回处理结果
  - Nginx Handler 顺序将每一个响应发送给客户端

- 一个完整的 web 请求
  ![web请求](https://graph.linganmin.cn/190720/5166133f9e2ff9437b5c29600edce1bb?x-oss-process=image/format,webp/quality,q_60)

### Nginx 和 PHP-FPM两种通信方式

> `nginx`服务器和`php-fpm`可以通过`tcp socket`和`unix socket`两种方式实现。

#### 区别

- `unix socket`方式要更快消耗资源更少
  - 因为socket之间在`nginx`和`php-fpm`进程之间通信，而`tcp`需要进行本地回环，还要申请临时端口和`tcp`资源
- `unix socket`会更不稳定

## PHP-FPM & FastCGI

### FastCGI

`FastCGI`协议，简单说来它就是 `Web` 服务器和应用（比如 `PHP`）之间的一个交互标准，一个二进制的协议，有了该协议，`Nginx` 和 `PHP` 之间就能够互相通信了，`FastCGI` 是 `CGI` 协议的一个升级。
光有 `FastCGI` 协议没用，基于该协议，必须实现一个 `SAPI` 接口，`PHP-FPM` 就是一个 `FastCGI` 协议的实现，它能够在一组关联的请求中保持一个持久连接（同一个客户请求由同一个 `PHP-FPM` 子进程处理），这个持久连接是由 `PHP-FPM` 处理的，而不是由 `Web` 服务器处理的。

> 相比于 `CGI` 实现来说，`FastCGI` 实现能够减少开销，从而提升 `Web` 服务器的处理能力。

### PHP-FPM

PHP-FPM除了实现了`FastCGI`协议还集成了PHP的解释器。

PHP-FPM由一个主进程和多个子进程组成，主进程复制与Web服务器（Nginx）通信，接收HTTP请求，然后分配给子进程处理，子进程主要动态执行PHP代码，处理完成后，租后由主进程返回给Web服务器。

#### PHP-FPM有很多优点：

- 动态产生子进程
- 平滑启动子进程
- 有独立的`php-fpm.conf`配置文件，基于`php.ini`配置文件
- `fastcgi_finish_request()`功能支持
  - 冲刷(flush)所有响应的数据给客户端。在调用方法的时候，会发送响应，关闭连接，但是不会结束PHP的运行

### php-cgi 进程占用 cpu 资源过多负载高的原因分析及解决步骤

- 程序中可能存在死循环，导致服务器负载超高
- 程序中存在过度耗时且不可能完成的操作
