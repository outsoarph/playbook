
export const navbar = [
    {
      text: 'Guide',
      link: '/guide/',
    },
  
    {
        text: 'Frontend',
        children: [
            {
                text: 'Getting Started',
                link: '/frontend/README.md',
            },
            {
                text: 'Vue',
                link: '/frontend/vue/README.md',
                children: [ 
                    {
                        text: 'Introduction to Vue.js',
                        link: '/frontend/vue/intro.md',
                    },
                ]
            },
        ]
    },
    {
        text: 'Tutorial',
        children: [
            {
                text: 'Getting Started',
                link: '/tutorial/README.md',
            },
            {
                text: 'AWS',
                link: '/tutorial/aws/README.md',
                children: [ 
                    {
                        text: 'Adding a CDN to Your Lightsail Instance',
                        link: '/tutorial/aws/add-cdn-lightsail.md',
                    },
                ]
            },
        ]
    }
]