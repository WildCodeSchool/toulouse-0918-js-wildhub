import jg_pic from '../images/team/jg_pic.jpeg';
import es_pic from '../images/team/es_pic.jpeg';
import octocat from '../images/team/octocat.png'

const TeamMembers = [
    {
        name: 'Eva Spessotto',
        job: 'Développeuse Front-End',
        social: [
            {
                name: 'GitHub',
                link: 'https://github.com/EvaSpessotto',
                icon: 'github'
            },
            {
                name: 'CodePen',
                link: 'https://codepen.io/evakattz/',
                icon: 'codepen'
            },
            {
                name: 'linkedIn',
                link: 'https://www.linkedin.com/in/eva-spessotto-9878b2144/',
                icon: 'linkedin'
            }
        ],
        avatar: es_pic
    },
    {
        name: 'Julien Sans',
        job: 'Développeur Front-End',
        social: [
            {
                name: 'GitHub',
                link: 'https://github.com/Julien-sans',
                icon: 'github'
            }
        ],
        avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'
    },
    {
        name: 'Nelson Hui',
        job: 'Développeur Front-End',
        social: [
            {
                name: 'GitHub',
                link: 'https://github.com/NelsonHui123',
                icon: 'github'
            }
        ],
        avatar: octocat
    },
    {
        name: 'Jules Grenier',
        job: 'Développeur Full-Stack',
        social: [
            {
                name: 'GitHub',
                link: 'https://github.com/JulesGrenier',
                icon: 'github'
            },
            {
                name: 'CodePen',
                link: 'https://codepen.io/Jules_Grenier/',
                icon: 'codepen'
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/JulesGrenier_',
                icon: 'twitter'
            },
            {
                name: 'linkedIn',
                link: 'https://www.linkedin.com/in/jules-grenier/',
                icon: 'linkedin'
            }
        ],
        avatar: jg_pic
    }
]

export default TeamMembers;
