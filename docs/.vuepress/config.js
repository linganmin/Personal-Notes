module.exports = {
  title: "✏️下💐",
  description: "工作笔记及学习笔记，包括但不限于编程",
  themeConfig: {
    sidebar: [
      [
        "/",
        "空"
      ],
      {
        title: '知识',
        collapsable: true,
        children: [
          [
            '/knowledges/vim',
            'vim'
          ],
          [
            '/knowledges/git',
            'Git'
          ]
        ]
      }, {
        title: '学习',
        collapsable: true,
        children: [
          [
            '/study/01',
            '第一个'
          ]
        ]
      }, {
        title: '生活',
        collapsable: true,
        children: [
          [
            '/life/01',
            '第一个'
          ]
        ]
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