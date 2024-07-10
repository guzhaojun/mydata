import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "清柠软件编程",
  description: "开发知识总结",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "guzj",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "master",
    docsDir: "开发知识总结",
    lastUpdatedText: "",
    navbar: [
      { text: "首页", link: "/" },
      { text: "后端", link: "/categories/houduan/1/" },
      { text: "前端", link: "/categories/qianduan/1/" },
      { text: "公众号", link: "/categories/gongzhonghao/1/" },
      { text: "优质项目", link: "/categories/youzhixiangmu/1/" },
      { text: "开发工具", link: "/categories/kaifagongju/1/" },
      { text: "面试大全", link: "/categories/mianshidaquan/1/" },
      { text: "关于作者", link: "/categories/author/1/" },
    ],
    bulletin: {
      body: [
        {
          type: "title",
          content: "关注我，了解更多",
        },
        {
          type: "text",
          content: `
          <ul>
          <img src="/logo.png" alt="清柠软件编程"/>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "仓库",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/guzhaojun?tab=repositories">宝藏之地<a/></li>
            <li><a href="https://gitee.com/ygxh">快速寻宝<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "buttongroup",
        //   children: [
        //     {
        //       text: "打赏",
        //       link: "../docs/other/zhifubao.html",
        //     },
        //   ],
        // },
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
