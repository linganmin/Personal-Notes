# Laravel 使用的一些笔记

## 打印 Sql

```php
\DB::listen(function($query) {
    \Log::info(
        $query->sql,
        $query->bindings,
        $query->time
    );
});
```
