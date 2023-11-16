
export const navbar = [
    {
      text: 'Guide',
      link: '/guide/',
    },
    {
        text: 'Services',
        children: [
            {
                text: 'Collaboration',
                link: '/services/collaboration/README.md',
                children: [ 
                    {
                        text: 'Staff Augmentation',
                        link: '/services/collaboration/staff-augmentation.md',
                    },
                    {
                        text: 'White Label',
                        link: '/services/collaboration/white-label.md',
                    },
                    {
                        text: 'Managed Services',
                        link: '/services/collaboration/managed.md',
                    }
                ]
            },
            {
                text: 'Niche',
                children: [
                    {
                        text: 'Digital Marketing Agency',
                        link: '/services/niche/digital-marketing-agency.md',
                    }
                ],
            },
        ]
    },
]