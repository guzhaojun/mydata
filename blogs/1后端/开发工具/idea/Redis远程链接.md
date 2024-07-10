## [redis配置允许远程连接](https://www.cnblogs.com/haoxuanchen2014/p/17922483.html)

1、修改redis.conf

\# 允许访问的地址，127.0.0.1为本机，也就是只允许本机访问，修改为0.0.0.0，则可以在任意IP访问
bind 0.0.0.0

\# 守护进程，修改为yes后即可后台运行
daemonize yes

\# 密码，设置后访问Redis必须输入密码
requirepass 111222

\# 关闭防护，允许远程连接
protected-mode no

\# 监听的端口
port 6379

\# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录
dir .

\# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
databases 1

\# 设置redis能够使用的最大内存
maxmemory 512mb

\# 日志文件，默认为空，不记录日志，可以指定日志文件名
logfile "redis.log"

 

修改配置文件之后，重启redis服务，使配置文件生效

2.防火墙开启6379端口

参考： 

https://blog.csdn.net/lrp210304/article/details/131377370