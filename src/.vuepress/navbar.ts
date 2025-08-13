import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "部署",
    icon: "fa-download",
    prefix: "/部署/",
    children: ["Windows","Linux","Docker","安全配置"]
  },
  {
    text: "客户端",
    icon: "fa-mobile",
    link: "/客户端/",
  },
  {
    text: "开发文档",
    icon: "fa-wrench",
    link: "/开发文档/",
  },
]);
