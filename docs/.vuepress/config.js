
// study
const skills = require('./menus/skills')
const SkillsMenu = skills.menu
// translations
const translation = require('./menus/translation')
const TransMenu = translation.menu
// life
const life = require('./menus/life')
const LifeMenu = life.menu
// docker
const docker = require('./menus/docker')
const DockerMenu = docker.menu
module.exports = {
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