
export const sidebar = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/README.md',
                '/guide/setup.md',
            ],
        },
      ],
    '/services/': [
        {
            text: 'Services',
            children: [
                '/services/README.md',
                {
                    collapsible: true,
                    text: 'Collaboration',
                    open: true,
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
                    ],
                },
                {
                    collapsible: true,
                    text: 'Niche',
                    children: [
                        {
                            text: 'Digital Marketing Agency',
                            link: '/services/niche/digital-marketing-agency.md',
                        }
                    ],
                },
            ],
        },
    ],
}