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
                  buildHookId: '615fa6c3184a87411fff3729',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-35ir3np1',
                  apiId: '425048d1-6f38-4a35-a8b1-eba6192d3673'
                },
                {
                  buildHookId: '615fa6c317faad40f051014b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hwbstuko',
                  apiId: '805fad60-885d-4e8c-8cf5-dca041edd5c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisdrake29/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hwbstuko.netlify.app', category: 'apps'}
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
