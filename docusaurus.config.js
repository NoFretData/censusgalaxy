// // @ts-check
// // `@type` JSDoc annotations allow editor autocompletion and type checking
// // (when paired with `@ts-check`).
// // There are various equivalent ways to declare your Docusaurus config.
// // See: https://docusaurus.io/docs/api/docusaurus-config

// import {themes as prismThemes} from 'prism-react-renderer';

// // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Census Galaxy',
//   tagline: 'Documentation',
//   favicon: 'img/favicon.ico',

//   // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
//   future: {
//     v4: true, // Improve compatibility with the upcoming Docusaurus v4
//   },

//   // Set the production url of your site here
//   url: 'https://arbazanalytics.github.io',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/censusgalaxy/',

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'ArbazAnalytics', // Usually your GitHub org/user name.
//   projectName: 'censusgalaxy', // Usually your repo name.

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//           // Useful options to enforce blogging best practices
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       // Replace with your project's social card
//       image: 'img/docusaurus-social-card.png',
//       navbar: {
//         title: 'Census Galaxy',
//         logo: {
//           alt: 'Census Galaxy Logo',
//           src: 'img/censuslogo.png',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Documentation',
//           },
//           {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             href: 'https://github.com/facebook/docusaurus',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'Tutorial',
//                 to: '/docs/intro',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'X',
//                 href: 'https://x.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Blog',
//                 to: '/blog',
//               },
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/facebook/docusaurus',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;



// 2 version after removing blog :

// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Census Galaxy',
//   tagline: 'Documentation',
//   favicon: 'img/favicon.ico',

//   future: {
//     v4: true,
//   },

//   url: 'https://arbazanalytics.github.io',
//   baseUrl: '/censusgalaxy/',

//   organizationName: 'ArbazAnalytics',
//   projectName: 'censusgalaxy',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: false, // ✅ Disabled blog completely
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: 'img/docusaurus-social-card.png',
//       navbar: {
//         title: 'Census Galaxy',
//         logo: {
//           alt: 'Census Galaxy Logo',
//           src: 'img/censuslogo.png',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Documentation',
//           },
//           {
//             href: 'https://github.com/facebook/docusaurus',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'Tutorial',
//                 to: '/docs/intro',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'X',
//                 href: 'https://x.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/facebook/docusaurus',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;


// version 3 removing intro, sample, and demo

// @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Census Galaxy',
//   tagline: 'Documentation',
//   favicon: 'img/Logo Icon Light.svg',

//   future: {
//     v4: true,
//   },

//   url: 'https://NoFretData.github.io',
//   baseUrl: '/censusgalaxy/',

//   organizationName: 'NoFretData',
//   projectName: 'censusgalaxy',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//             'https://github.com/NoFretData/censusgalaxy',
//         },
//         blog: false,
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: 'img/docusaurus-social-card.png',
//       navbar: {
//         title: '',
//         logo: {
//           alt: 'Census Galaxy Logo',
//           src: 'img/Logo Text Light.png',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Documentation',
//           },
//           {
//             href: 'https://github.com/NoFretData/censusgalaxy',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               // Removed intro/tutorial/demo/sample links
//               // Add other valid doc links here if needed
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Census Galaxy',
//                 href: 'https://censusgalaxy.framer.website/',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'X',
//                 href: 'https://x.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/NoFretData/censusgalaxy',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;



// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Census Galaxy',
//   tagline: 'Documentation',
//   favicon: 'img/Logo Icon Light.svg',

//   future: {
//     v4: true,
//   },

//   url: 'https://NoFretData.github.io',
//   baseUrl: '/censusgalaxy/',

//   organizationName: 'NoFretData',
//   projectName: 'censusgalaxy',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//             'https://github.com/NoFretData/censusgalaxy',
//         },
//         blog: false,
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: 'img/docusaurus-social-card.png',
//       navbar: {
//         title: '',
//         logo: {
//           alt: 'Census Galaxy Logo',
//           src: 'img/Logo Text Light.png',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Documentation',
//           },
//           {
//             href: 'https://censusgalaxy.framer.website/',
//             label: 'Main Website',
//             position: 'right',
//           },
//           {
//             href: 'mailto:brendan@nofretdata.com',
//             label: 'Contact Us',
//             position: 'right',
//           },
//           {
//             href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
//             label: 'Schedule a Demo',
//             position: 'right',
//           },
//           {
//             href: 'https://github.com/NoFretData/censusgalaxy',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               { label: 'Documentation', to: '/docs/quick-start-guide' },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Census Galaxy Website',
//                 href: 'https://censusgalaxy.framer.website/',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'X',
//                 href: 'https://x.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Contact Us',
//                 href: 'mailto:brendan@nofretdata.com',
//               },
//               {
//                 label: 'Schedule a Demo',
//                 href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
//               },
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/NoFretData/censusgalaxy',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} NoFretData. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;

// @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Census Galaxy',
//   tagline: 'Documentation',
//   favicon: 'img/Logo Icon Light.svg',

//   future: { v4: true },

//   url: 'https://NoFretData.github.io',
//   baseUrl: '/censusgalaxy/',

//   organizationName: 'NoFretData',
//   projectName: 'censusgalaxy',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: { defaultLocale: 'en', locales: ['en'] },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl: 'https://github.com/NoFretData/censusgalaxy',
//         },
//         blog: false,
//         theme: { customCss: './src/css/custom.css' },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: 'img/docusaurus-social-card.png',
//       navbar: {
//         title: '',
//         logo: {
//           alt: 'Census Galaxy Logo',
//           src: 'img/Logo Text Light.png',
//         },
//         items: [
//           // removed the docSidebar "Documentation" button
//           {
//             href: 'https://censusgalaxy.framer.website/',
//             label: 'Census Galaxy main website',
//             position: 'right',
//           },
//           {
//             href:
//               'mailto:brendan@nofretdata.com' +
//               '?subject=' +
//               encodeURIComponent('Census Galaxy Docs — Support Request') +
//               '&body=' +
//               encodeURIComponent(
//                 'Hi Census Galaxy team,%0A%0A' +
//                   'I need help with (please describe):%0A%0A' +
//                   'Page/section (optional): %0A' +
//                   'Steps taken / error message (if any): %0A%0A' +
//                   'Thanks!'
//               ),
//             label: 'Contact Us',
//             position: 'right',
//           },
//           {
//             href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
//             label: 'Schedule a Demo',
//             position: 'right',
//           },
//           // removed GitHub from navbar (still in footer)
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [{ label: 'Documentation', to: '/docs/quick-start-guide' }],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Census Galaxy Website',
//                 href: 'https://censusgalaxy.framer.website/',
//               },
//               { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
//               { label: 'X', href: 'https://x.com/docusaurus' },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               { label: 'Contact Us', href: 'mailto:brendan@nofretdata.com' },
//               {
//                 label: 'Schedule a Demo',
//                 href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
//               },
//               { label: 'GitHub', href: 'https://github.com/NoFretData/censusgalaxy' },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} NoFretData. Built with Docusaurus.`,
//       },
//       prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
//     }),
// };

// export default config;




// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Census Galaxy',
  tagline: 'Documentation',
  favicon: 'img/Logo Icon Light.svg',

  future: {
    v4: true,
  },

  url: 'https://NoFretData.github.io',
  baseUrl: '/censusgalaxy/',

  organizationName: 'NoFretData',
  projectName: 'censusgalaxy',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/NoFretData/censusgalaxy',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Census Galaxy Logo',
          src: 'img/Logo Text Light.png',
        },
        items: [
          {
            href: 'https://censusgalaxy.framer.website/',
            label: 'Census Galaxy',
            position: 'right',
          },
          {
            href: 'mailto:brendan@nofretdata.com',
            label: 'Contact Us',
            position: 'right',
          },
          {
            href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
            label: 'Schedule a Demo',
            position: 'right',
            className: 'navbar-demo-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Documentation', to: '/docs/quick-start-guide'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Census Galaxy Website',
                href: 'https://censusgalaxy.framer.website/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `
                  <p style="margin:0">
                    Need help? Contact us anytime at 
                    <a href="mailto:brendan@nofretdata.com">brendan@nofretdata.com</a>.
                  </p>
                `,
              },
              {
                label: 'Schedule a Demo',
                href: 'https://calendly.com/brendan-nofretdata/30min?month=2025-09',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NoFretData/censusgalaxy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NoFretData. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
