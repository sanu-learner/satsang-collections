import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const organizationName = 'sanu-learner';
const projectName = 'satsang-collections';

const config: Config = {
  title: 'Satsang Collections',
  tagline: 'Vande Purushottam',
  favicon: 'img/satsang_logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/satsang_logo.png',
    navbar: {
      title: 'Satsang Collections',
      logo: {
        alt: 'My Site Logo',
        src: 'img/satsang_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'holybooksSidebar',
          position: 'left',
          label: 'Holy Books',
        },
        {
          type: 'docSidebar',
          sidebarId: 'prayersSidebar',
          position: 'left',
          label: 'Prayers',
        },
       // {to: '/blog', label: 'Prayers', position: 'left'},
        {
          href: 'https://satsangcanada.com',
          label: 'Satsang Canada',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Books',
          items: [
            {
              label: 'Satyanusaran',
              to: '/docs/category/satyanusaran',
            },
            { label: 'Nari Neeti',
              to: '/docs/category/nari-neeti'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Satsang Canada',
              href: 'https://satsangcanada.com',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Satsang Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Satsang Collections, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
