---
title: Windows部署
icon: fab fa-windows
order: 2
---

::: tip 提示
需要一个MySQL8数据库
:::

## 下载安装包
[点击这里](https://github.com/SClipBoard/ClipBoard/releases)下载最新发行版Windows安装包

## 启动
1. 解压下载后的文件
2. 双击根目录下的`.bat`脚本
首次启动后您应当看到在项目根目录下会多出一个`.env`配置文件，您只需要在开头部分将MySQL数据库的连接信息填入进去即可，其他配置项可以保持默认值。

::: details 配置文件说明
```env
# 数据库配置
DB_HOST=mysql
DB_PORT=3306
DB_USER=clipboard_user
DB_PASSWORD=clipboard_password
DB_NAME=clipboard_sync
```
:::

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。
