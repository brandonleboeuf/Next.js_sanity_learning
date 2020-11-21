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
                  buildHookId: '5fb95c62ef271fd613f5ddc2',
                  title: 'Sanity Studio',
                  name: 'next-js-sanity-learning-studio',
                  apiId: 'd22f46b1-0b4f-4c3c-92ce-3d162af556de'
                },
                {
                  buildHookId: '5fb95c629a47a4f0bb833266',
                  title: 'Landing pages Website',
                  name: 'next-js-sanity-learning',
                  apiId: '01bf70d7-2e4b-4da4-8494-af0130eeee18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brandonleboeuf/Next.js_sanity_learning',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-js-sanity-learning.netlify.app', category: 'apps'}
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
