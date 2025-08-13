---
title: Linux部署
icon: fab fa-linux
order: 3
---

::: tip 准备事项
1. 建议优先选择 Ubuntu 22，兼容性最佳。
2. 需要一个MySQL8数据库
:::

## 🧰 一、安装后台管理工具

推荐使用 `screen`，方便面板后台运行。

- CentOS 安装：
  ```bash
  yum install screen -y
  ```
- Ubuntu 安装：
  ```bash
  apt install screen -y
  ```

## 📦 二、下载与解压面板文件

1. 下载面板压缩包：
   ```bash
   wget https://github.com/SClipBoard/ClipBoard/releases/latest/download/clipboard-sync-linux.tar.gz
   ```
2. 解压文件：
   ```bash
   tar -zxvf clipboard-sync-linux.tar.gz
   ```

## ⚙️ 三、运行面板

1. 启动 screen 后台服务（如未创建可省略）：
   ```bash
   screen -r clipboard
   ```
2. 赋予启动脚本权限：
   ```bash
   chmod +x start.sh
   chmod +x node/bin/node
   ```
3. 启动面板：
   ```bash
   ./start.sh
   ```
4. 挂入后台：
   使用快捷键 `Ctrl+B` 后松开，再按 `D`

::: warning 注意
如遇权限或依赖问题，建议以 root 用户或 sudo 权限执行相关命令。
:::

## 修改配置问`.env`
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
