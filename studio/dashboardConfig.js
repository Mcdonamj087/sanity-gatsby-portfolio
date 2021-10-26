export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '617765215d6fd00239673cea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-efdd91j9',
                  apiId: '99985f41-790f-4a80-90e4-7e98bb67afb9'
                },
                {
                  buildHookId: '61776522eba7b5229faac18a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rvq74sr5',
                  apiId: 'eb47ddac-73e8-4c4c-8c1a-884818d2de9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mcdonamj087/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rvq74sr5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
