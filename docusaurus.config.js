// docusaurus.config.js
module.exports = {
  title: 'Kubejs WIKI unofficial',
  tagline: 'Powerful scripting for Minecraft',
  url: 'https://DylanPlayzz871.github.io',
  baseUrl: '/kubejs-wiki-unofficial/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'DylanPlayzz871',   // ← Change to your GitHub username
  projectName: 'kubejs-wiki-unofficial',       // ← Change to your repo name later

  themeConfig: {
    navbar: {
      title: 'KubeJS wiki unofficial',
      logo: {
        alt: 'My KubeJS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'WIKI',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/your-username/my-kubejs-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Your Name.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};