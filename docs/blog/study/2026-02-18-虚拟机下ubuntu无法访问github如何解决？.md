---
title: 虚拟机下ubuntu无法访问github如何解决？
date: 2026-02-18
authors:
  - name: 猫酒
    email: 2738035238@qq.com
categories:
  - ubuntu
  - github
---
# 虚拟机下ubuntu无法访问github如何解决？

## 解决方法

修改host（见步骤1-4）。

其他可以尝试的修改方法：关闭防火墙试试 / 切换节点

### 步骤一：打开hosts文件

```bash
sudo gedit /etc/hosts
```

### 步骤二：查询 github.com的ip地址

访问：https://sites.ipaddress.com/github.com/#ipinfo

将github.com的ip地址 `140.82.112.3` 添加到hosts文件末尾，如下图所示。

### 步骤三：查询 github.global.ssl.fastly.net的ip地址

访问：https://sites.ipaddress.com/github.global.ssl.fastly.net/#ipinfo

将github.global.ssl.fastly.net的ip地址添加到hosts文件末尾，这里边查询到了4个ip地址，这里都加进去。

最终添加到hosts文件末尾的ip地址如下：

```
140.82.114.4 github.com
151.101.1.6 github.global.ssl.fastly.net
151.101.65.6 github.global.ssl.fastly.net
151.101.129.6 github.global.ssl.fastly.net
151.101.193.6 github.global.ssl.fastly.net
```

### 步骤四：关闭hosts文件，重启网络服务

```bash
/etc/init.d/networking restart
```

再次访问github官网，可以顺利访问。

---

## 注意

需要注意的是有时候重新打开虚拟机，由于ip地址改变，可能需要重新执行一遍同样的操作才能正常访问github。

---

**原文链接**：https://blog.csdn.net/m0_46681107/article/details/134956661
