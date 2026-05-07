import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: '关于慧研', href: getPermalink('/about') },
    { text: '服务体系', href: getPermalink('/services') },
    { text: '升学路径', href: getPermalink('/pathways') },
    { text: 'B端合作', href: getPermalink('/partnership') },
    { text: '联系我们', href: getPermalink('/contact') },
  ],
  actions: [{ text: '免费评估', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: '核心页面',
      links: [
        { text: '关于慧研', href: getPermalink('/about') },
        { text: '服务体系', href: getPermalink('/services') },
        { text: '升学路径', href: getPermalink('/pathways') },
        { text: 'B端合作', href: getPermalink('/partnership') },
      ],
    },
    {
      title: '服务方向',
      links: [
        { text: '本科申请规划', href: getPermalink('/services') },
        { text: '硕士申请规划', href: getPermalink('/services') },
        { text: '博士申请规划', href: getPermalink('/services') },
        { text: '海外落地支持', href: getPermalink('/services') },
      ],
    },
    {
      title: '联系',
      links: [
        { text: '预约免费咨询', href: getPermalink('/contact') },
        { text: 'Email: huiyanliuxue.info@gmail.com', href: 'mailto:huiyanliuxue.info@gmail.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Huiyan International Education', href: getPermalink('/') },
  ],
  socialLinks: [],
  footNote: `
    © 2026 Huiyan International Education. All rights reserved.
  `,
};
