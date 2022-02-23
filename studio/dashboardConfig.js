export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6216696a2ecad426bc3492c1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q82be3p8',
                  apiId: '3d9cba0f-2dce-4750-9d9b-62a07bb64221'
                },
                {
                  buildHookId: '62166969f6dca735380d0356',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g12pq4h5',
                  apiId: 'fd17a06e-48b5-4f99-bd53-c113b5c8a60d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chantirwadie/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g12pq4h5.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
