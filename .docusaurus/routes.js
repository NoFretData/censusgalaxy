import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/censusgalaxy/markdown-page',
    component: ComponentCreator('/censusgalaxy/markdown-page', 'cef'),
    exact: true
  },
  {
    path: '/censusgalaxy/docs',
    component: ComponentCreator('/censusgalaxy/docs', '21e'),
    routes: [
      {
        path: '/censusgalaxy/docs',
        component: ComponentCreator('/censusgalaxy/docs', '5a1'),
        routes: [
          {
            path: '/censusgalaxy/docs',
            component: ComponentCreator('/censusgalaxy/docs', '1cf'),
            routes: [
              {
                path: '/censusgalaxy/docs/data-geography-nuances',
                component: ComponentCreator('/censusgalaxy/docs/data-geography-nuances', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/data/demographic-explanation',
                component: ComponentCreator('/censusgalaxy/docs/data/demographic-explanation', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/data/metrics',
                component: ComponentCreator('/censusgalaxy/docs/data/metrics', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/data/percentages',
                component: ComponentCreator('/censusgalaxy/docs/data/percentages', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/data/percentiles',
                component: ComponentCreator('/censusgalaxy/docs/data/percentiles', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/geographies',
                component: ComponentCreator('/censusgalaxy/docs/geographies', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/censusgalaxy/docs/quick-start-guide',
                component: ComponentCreator('/censusgalaxy/docs/quick-start-guide', 'bb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/censusgalaxy/',
    component: ComponentCreator('/censusgalaxy/', 'a2c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
