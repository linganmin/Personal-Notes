module.exports = {
  title: "这是Demo啦",
  description: "啦啦啦啦啦啦啦啦啦...",
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
