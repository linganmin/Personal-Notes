module.exports = {
  title: "笔下花🌹",
  description: "工作笔记及学习笔记，包括但不限于编程",
  themeConfig: {
    sidebar: [
      [
        "/",
        "简介"
      ],
      {
        title: 'Tools',
        collapsable: true,
        children: [
          [
            '/tools/vim',
            'vim'
          ],
          [
            '/tools/git',
            'Git'
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
