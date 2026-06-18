// docusaurus.config.js
module.exports = {
  title: 'Kubejs WIKI Unofficial',
  tagline: 'Powerful scripting for Minecraft',
  url: 'https://DylanPlayzz871.github.io',
  baseUrl: '/kubejs-wiki-unofficial/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'DylanPlayzz871',
  projectName: 'kubejs-wiki-unofficial',

  // Analytics Scripts
  scripts: [
    {
      src: 'https://plausible.io/js/pa-G8xZr9-wYFFdBDff99zNB.js',
      async: true,
      defer: true,
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-TFJ5HYNSFC',
      async: true,
    },
  ],

  themeConfig: {
    navbar: {
      title: 'KubeJS Wiki Unofficial',
      logo: {
        src: 'img/kubejs-logo.png',
                },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'WIKI',
        },
        {
          href: 'https://github.com/DylanPlayzz871/kubejs-wiki-unofficial',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/dav7ZJ5gQv',
          label: '💬 Discord',
          position: 'right',
        },
        {
          href: 'https://www.twitch.tv/dylanplayzz877',
          label: '📺 Twitch',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DylanPlayzz871 - Unofficial KubeJS Wiki.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],
};