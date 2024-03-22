export const sidebar = [
	{
       children: [
            {
                text: "Guide",
                children: ["/guide/README.md", "/guide/setup.md"],
            },
        ],
    },
    {
        text: 'Collaboration',
        children: [
            {
                text: 'Version Control',
                link: '/collaboration/version-control/README.md',
                children: [ 
                    {
                        text: 'Git',
                        link: '/collaboration/version-control/git.md',
                    },
                    {
                        text: 'GitHub',
                        link: '/collaboration/version-control/github.md',
                    },
                ]
            },
            {
                text: 'Project Management',
                link: '/collaboration/project-management/README.md',
                children: [ 
                    {
                        text: 'GitHub Project',
                        link: '/collaboration/project-management/github-project.md',
                    },
                    {
                        text: 'Jira',
                        link: '/collaboration/project-management/jira.md',
                    },
                ]
            }

        ]
    },
    {
        children: [
            {
                text: "Tutorial",
                children: ["/guide/tutorial/README.md", "/guide/tutorial/aws/README.md", "/guide/tutorial/aws/add-cdn-lightsail.md"],
            },
        ],
    },
    {
        children: [
            {
                text: "Commands",
                children: ["/commands/bash-commands.md", "/commands/vim-commands.md"],
            },
        ],
    }
]
