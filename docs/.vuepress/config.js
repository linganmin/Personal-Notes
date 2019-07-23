
// study
const skills = require('./menus/skills')
const SkillsMenu = skills.menu
// translations
const translation = require('./menus/translation')
const TransMenu = translation.menu
// life
const life = require('./menus/life')
const LifeMenu = life.menu
// life
const books = require('./menus/books')
const BooksMenu = books.menu
// docker
const docker = require('./menus/docker')
const DockerMenu = docker.menu
module.exports = {
  head: [
    ['link', { rel: 'icon', href: 'https://graph.linganmin.cn/2019-07-14/logo.png?x-oss-process=image/format,webp/quality,q_60' }],[
      'script',{},`
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?18e9f126f8c19b0e131010005cd017eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
      `
    ]
  ],
  locales: {
    '/': {
      lang: "zh-CN",
      title: "劝君惜取少年时",
      description: "工作笔记及学习笔记，包括但不限于编程",
    }
  },
  themeConfig: {
    sidebar: [
      [
        "/",
        "序"
      ],
      {
        title: '技术',
        collapsable: true,
        children: SkillsMenu
      }, {
        title: '译文',
        collapsable: true,
        children: TransMenu
      }, {
        title: '生活',
        collapsable: true,
        children: LifeMenu
      }, {
        title: 'Docker',
        collapsable: true,
        children: DockerMenu
      }, {
        title: '读书笔记',
        collapsable: true,
        children: BooksMenu
      }
    ],
    nav: [{
        text: "首页",
        link: "/"
      },
      {
        text: "小下",
        link: "https://www.linganmin.cn"
      }
    ]
  }
}