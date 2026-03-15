---
title: Docker Bug Process : Error: Failed to download metadata for repo 'appstream'
date: 2026-03-01
authors:
  - name: 猫酒
    email: 2738035238@qq.com
categories:
  - Docker
instant: false
---

## Docker Bug Process
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
docker 在打包安装vim报上面这个错误，出现这种错误有两种情况：
1.第一种情况检查网络连接，使用ping ``www.baidu.com检查是否有外网，如果没有外网检查网络连接，如果有外网继续看下面这个情况。
2.第二种情况就是CentOS在2020 年 12 月 8 号，CentOS 官方宣布了停止维护 CentOS Linux 的计划，并推出了 CentOS Stream 项目，CentOS Linux 8 作为 RHEL 8 的复刻版本，生命周期缩短，于 2021 年 12 月 31 日停止更新并停止维护（EOL）。
针对第二种情况的解决方法有两种：
1. 第一种：更换你的centos版本，要求版本小于8版本
        更改版本为centos7
FROM centos:centos7
RUN yum -y install vim
1. 第二种：更改镜像，需要将镜像从 mirror.centos.org 更改为 vault.centos.org
编写Dockerfile，添加#部分(不包括#)
FROM centos:latest
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
RUN yum update -y
RUN yum -y install vim
最后重新打包镜像
docker buil -t mycentos:1 .
Invalid version flag: if
这情况多半是yum.repos.d里面的源出问题了，解决方法很简单，直接换掉。
不过换掉的话万一不能用，还可以换回来，所以先备份一下原来的yum.repos.d文件：
mv /etc/yum.repos.d /etc/yum.repos.d.backup
然后创建一个yum.repos.d文件夹，并且进入该文件夹运行(如果你的wget没有，请自行百度安装wget,99%的情况下服务器上都有wget)
wget ``http://mirrors.aliyun.com/repo/Centos-7.repo
然后运行yum clean all，再运行yum makecache重新缓存，就可以愉快的继续使用yum upgrade或者yum update了。