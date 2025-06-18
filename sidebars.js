const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Quick Start Guide',
      items: ['quick-start/quick-start-guide'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['user-guide/user-guide'],
    },
    {
      type: 'category',
      label: 'Census Galaxy',
      items: [
        'census-galaxy/overview',
        'census-galaxy/geographies',
        'census-galaxy/data-sources',
        'census-galaxy/metrics',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      items: [
        {
          type: 'category',
          label: 'Geographies',
          items: ['data/geographies/block-groups'],
        },
        {
          type: 'category',
          label: 'Metrics',
          items: ['data/metrics/base-demographics'],
        },
      ],
    },
  ],
};

export default sidebars;

