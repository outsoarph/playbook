
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
    '/collaboration/': [
        {
            text: 'Collaboration',
            children: [
                '/collaboration/README.md',
                {
                    collapsible: true,
                    text: 'Version Control',
                    children: [
                        {
                            text: 'Git',
                            link: '/collaboration/version-control/git.md',
                        },
                        {
                            text: 'GitHub',
                            link: '/collaboration/version-control/github.md',
                        },
                    ],
                },
                {
                    collapsible: true,
                    text: 'Project Management',
                    children: [
                        {
                            text: 'GitHub Project',
                            link: '/collaboration/project-management/github-project.md',
                        },
                        {
                            text: 'Jira',
                            link: '/collaboration/project-management/jira.md',
                        },
                    ],
                },
            ],
        },
    ],
}