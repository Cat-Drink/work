---
title: 虚拟机相关问题解决
date: 2026-02-11
authors:
  - name: 猫酒
    email: 2738035238@qq.com
categories:
  - 虚拟机
  - Bug
  - Linux
---
# 虚拟机相关问题解决

[Linux系统翻墙方法](https://github.com/Alvin9999/new-pac/wiki/Linux系统翻墙方法)

#### CentOS7 执行yum命令报错：未知的错误" 正在尝试其它镜像

```SQL
http://mirrors.cloud.aliyuncs.com/centos/7/os/x86_64/repodata/repomd.xml: [Errno 14] curl#6 - "Could not resolve host: mirrors.cloud.aliyuncs.com; 。未知的错误" 正在尝试其它镜像

One of the configured repositories failed (Unknown),  
 and yum doesn't have enough cached data to continue. At this point the only  
 safe thing yum can do is fail. There are a few ways to work "fix" this:  
```

- 解决办法

```SQL
找到并打开目录下文件/etc/resolv.conf，添加下面一行：
 nameserver 114.114.114.114 （这是国内的dns服务器系统，谷歌的可以使用8.8.8.8）

保存后重启系统或者重启网卡，输入命令
reboot （重启系统）
service network restart（重启网卡）
最后更新yum即可，，输入命令
yum update
```

#### NTP时间同步报错“the NTP socket is in use, exiting”

```Bash
# 方法一
service ntpd stop
ntpdate ntp.aliyun.com

# 方法二
ps -ef|grep ntpd
kill -9 ntpd杀掉进程
重新执行ntpdate ntp.api.bz
```

#### Failed to restart ntpd.service: Unit not found时钟同步失败

```Bash
1. 查询服务是否存在
systemctl list-unit-files --type=service

2. 有则执行
systemctl daemon-reload
3.无则安装
[root@localhost ~]# yum install -y ntp      //安装时间同步程序

4. 重启服务
systemctl restart ntpd 
systemctl enable ntpd
[root@localhost ~]# service ntpd start   
[root@localhost ~]# ntpdate -u cn.pool.ntp.org    //同步网络时间
[root@localhost ~]# vi /etc/ntp.conf   //配置时间同步(可选)
```

#### 远程ssh连接时出现：Permission denied, please try again问题

```Plain
SSH 以普通权限用户远程连接时无问题，但以 root 账户进行远程连接时显示：
C:\Users\yogile> ssh root@192.168.0.129
root@192.168.0.129's password:
Permission denied, please try again.
出现如上问题的原因是： 服务端 SSH 服务配置了禁止root用户登录策略

解决方法下述。

1. sshd_config 文件配置
查找关键词 PermitRootLogin
vim /etc/ssh/sshd_config 打开配置文件。
在阅读模式（按下 Esc）下，输入指令查找关键词 PermitRootLogin ：
复制/PermitRootLogin
该文档可能出现多次该关键词，请多查找几次。
查找结果一般在单独一行会出现：
PermitRootLogin prohibie-password
PermitRootLogin no
这些语句在文件可能会加注释。

2. 修改指令
去掉注释，将这一行修改为：
复制PermitRootLogin yes
:wq 保存退出；

3. 重启SSH服务
执行 service sshd restart 命令，即可以 root 账户远程连接。

4. 还是不行则可以更新升级openssh包
保存退出后仍不能解决问题查看ssh安装
rpm -qa | grep openssh
```

#### Linux如何重置root密码

在 Linux 中，可以通过以下步骤来重置 root 用户的密码：

1. 首先，登录到系统上作为已有管理员账号（比如使用 sudo）。
2. 打开终端或命令行界面。
3. 输入以下命令并按 Enter 键运行：`sudo passwd root`
4. 然后会提示输入当前管理员账号的密码。
5. 接下来，输入新的 root 密码两次进行确认。注意要设定一个安全且容易记住的密码。
6. 完成后，将显示 "passwd: password updated successfully" 表明密码更改成功。
7. 现在，你可以使用新的 root 密码来登录了。

需要注意的是，修改 root 密码时应该小心操作，确保只有经过授权的人才能获得对系统的完全控制权限

#### ssh密钥添加后仍需要密码验证登录问题

dont have server accepts key 

用户问题，网上给出教程全部都是root用户下的教程，也就是说你只有用root用户登陆时，服务器才会搜索/root/.ssh下的文件。当你用其他用户登录时，就需要在/home/username/.shh下添加你的公钥，并且对其设置正确的权限。否则连接的时候会出现诸如 Permission denied (publickey) 之类的错误。

Linux对不同的用户有不同的权限设置，而且不同用户的密码数据也不同。那肯定不能想着通过在root用户下添加一个公钥文件就能够访问到所有的用户，还是需要在你要访问的用户目录下添加自己数据    

原文链接：https://blog.csdn.net/qq_44695454/article/details/127056751

#### Linux wget 403 forbidden错误

在wget时使用-U参数就正常了，原因是资源服务器限制了访问代理，这里加上-U参数设定了代理名称，就可以正常下载了。

```Bash
# 问题一:wget HTTP request sent, awaiting response... 403 Forbidden
wget -U NoSuchBrowser/1.0 https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2023.03-Linux-x86_64.sh

出现这个错误是因为在使用wget或curl请求资源时被服务器拒绝了，为了防止爬虫等消耗服务器资源，服务器根据你的请求头进行了选择性屏蔽，因此需要修改wget和curl的代理User-Agent来进行伪装。
```

另外还有一种情况是资源所在目录没有权限，也会返回403错误，这种情况使用浏览器下载也会报错。

#### Linux服务器无PIP解决

```SQL
# 查看python版本
[root@aaa ~]# python --version
Python 2.7.5

根据版本下载get-pip.py文件
wget https://bootstrap.pypa.io/pip/2.7/get-pip.py
安装pip
python get-pip.py
```