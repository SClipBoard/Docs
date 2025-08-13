---
home: true
icon: home
title: 剪切板同步服务
description: 一个跨设备的剪切板同步服务，支持文字和图片内容的实时同步
heroImage: /logo.png
heroText: 剪切板同步服务
heroFullScreen: true
tagline: 跨设备剪切板同步，让内容无缝流转
actions:
  - text: 快速开始
    link: /README.md#快速开始
    type: primary
  - text: 部署指南
    link: /部署/
    type: secondary

features:
  - title: 📋 剪切板同步
    icon: copy
    details: 支持文字和图片内容的跨设备实时同步，让内容在设备间无缝流转
    link: /README.md#核心功能

  - title: 🔄 实时更新
    icon: sync
    details: 基于WebSocket的实时内容推送，确保内容即时同步到所有连接设备
    link: /README.md#技术架构

  - title: 📱 多设备支持
    icon: mobile-alt
    details: 支持多个设备同时连接和同步，无论是手机、平板还是电脑
    link: /README.md#使用指南

  - title: 🔍 内容搜索
    icon: search
    details: 支持按内容、类型、设备筛选和搜索，快速找到需要的剪切板内容
    link: /README.md#使用指南

  - title: 📊 数据统计
    icon: chart-bar
    details: 提供存储使用情况和同步统计，清晰了解服务使用情况
    link: /README.md#配置说明

  - title: ⚙️ 配置管理
    icon: cog
    details: 灵活的同步和清理策略配置，满足不同场景的使用需求
    link: /README.md#配置说明

---

# 剪切板同步服务

一个现代化的跨设备剪切板同步解决方案，支持文字和图片内容的实时同步，让您的工作效率倍增。

## 🎯 核心功能

### 基础同步能力
- **📋 剪切板同步**: 支持文字和图片内容的跨设备同步
- **🔄 实时更新**: 基于WebSocket的实时内容推送
- **📱 多设备支持**: 支持多个设备同时连接和同步
- **🔍 内容搜索**: 支持按内容、类型、设备筛选和搜索
- **📊 数据统计**: 提供存储使用情况和同步统计

### 高级管理功能
- **🗂️ 批量操作**: 支持批量选择、删除剪切板内容
- **📤 导入导出**: 支持JSON格式的数据导入导出
- **⚙️ 配置管理**: 灵活的同步和清理策略配置
- **🧹 自动清理**: 可配置的过期内容自动清理
- **📈 实时监控**: 设备连接状态和同步状态监控

## 🏗️ 技术架构

### 前端技术栈
| 技术 | 用途 | 版本 |
|---|---|---|
| **React 18** | 用户界面框架 | ^18.2.0 |
| **TypeScript** | 类型安全的JavaScript | ^5.0.0 |
| **Vite** | 快速的构建工具 | ^4.0.0 |
| **Tailwind CSS** | 实用优先的CSS框架 | ^3.3.0 |
| **React Router** | 客户端路由 | ^6.8.0 |
| **Zustand** | 轻量级状态管理 | ^4.3.0 |
| **Lucide React** | 图标库 | ^0.263.0 |
| **Sonner** | 优雅的通知组件 | ^0.6.0 |

### 后端技术栈
| 技术 | 用途 | 版本 |
|---|---|---|
| **Node.js** | JavaScript运行时 | >= 18.0.0 |
| **Express.js** | Web应用框架 | ^4.18.0 |
| **TypeScript** | 类型安全的JavaScript | ^5.0.0 |
| **WebSocket (ws)** | 实时通信 | ^8.13.0 |
| **MySQL** | 关系型数据库 | >= 8.0 |
| **Multer** | 文件上传中间件 | ^1.4.0 |
| **CORS** | 跨域资源共享 | ^2.8.0 |

## 📁 项目结构

项目采用清晰的分层架构设计，前后端分离，代码组织有序：

```
clipboard-sync/
├── 📁 src/                    # 前端源码
│   ├── 📁 components/         # React组件
│   ├── 📁 pages/             # 页面组件
│   ├── 📁 hooks/             # 自定义Hooks
│   ├── 📁 lib/               # 工具库
│   └── 📁 assets/            # 静态资源
├── 📁 api/                   # 后端源码
│   ├── 📁 routes/            # API路由
│   ├── 📁 config/            # 配置管理
│   ├── 📁 utils/             # 工具函数
│   ├── 📄 database.ts        # 数据库操作
│   ├── 📄 websocket.ts       # WebSocket服务
│   ├── 📄 app.ts             # Express应用
│   └── 📄 server.ts          # 服务器入口
├── 📁 shared/                # 共享类型定义
├── 📁 migrations/            # 数据库迁移文件
├── 📁 uploads/               # 文件上传目录
└── 📁 logs/                  # 日志文件
```