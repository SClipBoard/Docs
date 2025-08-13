---
title: Docker部署(推荐)
icon: fab fa-docker
order: 4
---

<AutoCatalog />

## 创建 docker-compose.yml
准备一个目录，在该目录下创建文件 `docker-compose.yml`

```yml
services:
  # 应用服务
  app:
    build: .
    image: xiaozhu674/clipboard-sync:latest
    ports:
      - "3001:3001"
      - "3002:3002"
    environment:
      - NODE_ENV=production
      - DOCKER_ENV=true
      - PORT=3001
      - WS_PORT=3002
      - CORS_ORIGIN=*
      - DB_HOST=mysql
      - DB_PORT=3306
      - DB_USER=clipboard_user
      - DB_PASSWORD=clipboard_password
      - DB_NAME=clipboard_sync
      - LOG_LEVEL=info
      - LOG_FILE=logs/app.log
      - UPLOAD_DIR=uploads
      - MAX_FILE_SIZE=10485760
      - AUTO_CLEANUP_ENABLED=true
      - AUTO_CLEANUP_DAYS=30
      - MAX_ITEMS_PER_DEVICE=1000
    depends_on:
      mysql:
        condition: service_healthy
    volumes:
      - ./uploads:/app/dist/uploads
      - ./logs:/app/logs
    restart: unless-stopped

  # MySQL 数据库服务
  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root_password
      - MYSQL_DATABASE=clipboard_sync
      - MYSQL_USER=clipboard_user
      - MYSQL_PASSWORD=clipboard_password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./migrations:/docker-entrypoint-initdb.d
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      timeout: 20s
      retries: 10
    restart: unless-stopped

volumes:
  mysql_data:

```

::: info 镜像说明
`image`为镜像名称，需要根据实际下载的镜像名称修改，末尾冒号的右边为版本号，不知道可以使用latest，如果需要进行版本更新建议使用版本号，详情可以从[Github Release](https://github.com/SClipBoard/ClipBoard/releases)获取最新版本号。
:::

## 创建容器
在 `docker-compose.yml` 文件目录下执行：

```bash
docker compose up -d
```

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。

## 更新
在`docker-compose.yml`文件目录下执行：

```bash
docker-compose up -d --pull always
```