import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "剪切板同步服务",
  description: "跨设备剪切板同步服务 - 支持文字和图片内容的实时同步，让内容在设备间无缝流转",

  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
