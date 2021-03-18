export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60532bc6dfb5aac9540ad94f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wit7z7nm',
                  apiId: '98c0dc9a-c00f-4437-ac9b-3b74eb824621'
                },
                {
                  buildHookId: '60532bc6fab0d8b6f9ebb233',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ubnw7p63',
                  apiId: 'b8bff4ec-dd31-4ce5-a892-fe8000fc76c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elchiconube/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ubnw7p63.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
