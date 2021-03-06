// 全局的一些配置
export default {
  rootPath: '/website', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'dromara.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'dromara',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/soul/soul.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: '任何单位或个人转载本网站的所有相关信息，请注明来源。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/soul/soul.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/soul/soul.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/soul/soul.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright ©2018 549477611@qq.com by xiaoyu',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'droamra.org',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/soul/soul.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '任何单位或个人转载本网站的所有相关信息，请注明来源。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/soul/soul.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/soul/soul.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/soul/soul.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright ©2018 549477611@qq.com by xiaoyu',
  },
};
