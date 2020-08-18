// team
import team1 from './img/team/team-1.jpg'
import team2 from './img/team/team-2.jpg'
import team3 from './img/team/team-3.jpg'
import team4 from './img/team/team-4.jpg'
// portfolio
import portfolio1 from './img/portfolio/portfolio-1.jpg'
import portfolio2 from './img/portfolio/portfolio-2.jpg'
import portfolio3 from './img/portfolio/portfolio-3.jpg'
import portfolio4 from './img/portfolio/portfolio-4.jpg'
import portfolio5 from './img/portfolio/portfolio-5.jpg'
import portfolio6 from './img/portfolio/portfolio-6.jpg'
import portfolio7 from './img/portfolio/portfolio-7.jpg'
import portfolio8 from './img/portfolio/portfolio-8.jpg'
import portfolio9 from './img/portfolio/portfolio-9.jpg'

let WebsiteText=null;
if(WebsiteText===null){
    WebsiteText={
        home:{
            navbar: {
                navItems: {
                    item1: "Home",
                    item2: {
                        main: "Services",
                        item1: {
                            main: "GeM",
                            item1: "Buyer Services",
                            item2: "Seller Services"
                        },
                        item2: "Web Development",
                        item3: "E-Marketing",
                        item4: "Business Productivity Services",
                        item5: "Machine Learning",
                        item6: "Professionals Toolbox"
                    },
                    item3: "Portfolio",
                    item4: "About",
                    item5: "Contact",
                },
                greeting: "Hi, ",
                btn: {
                    signIn: "Sign In",
                    logout: "Logout"
                },
                popup: {
                    greeting: "Welcome, ",
                    heading: "Sign in with"
                }
            },
            header: {
                heading:"This is the home heading",
                headerText:"We are team of talanted digital marketers",
                headerCardsData: [
                    {
                        classBox: '',
                        icon: 'ri-store-line',
                        name: 'Lorem Ipsum'
                    },
                    {
                        classBox: '',
                        icon: 'ri-bar-chart-box-line',
                        name: 'Dolor Sitema'
                    },
                    {
                        classBox: 'mt-4 mt-md-0',
                        icon: 'ri-calendar-todo-line',
                        name: 'Sedare Perspiciatis'
                    },
                    {
                        classBox: 'mt-4 mt-xl-0',
                        icon: 'ri-paint-brush-line',
                        name: 'Magni Dolores'
                    },
                    {
                        classBox: 'mt-4 mt-xl-0',
                        icon: 'ri-database-2-line',
                        name: 'Nemos Enimade'
                    }
                ]
            },
            about: {
                introductionHeading:"Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
                introductionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
                introductionCheckList1:"Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                introductionCheckList2:"Duis aute irure dolor in reprehenderit in voluptate velit.",
                introductionCheckList3:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
                introductionEndingText:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            },
            featuresListData: [
                {
                    classDiv: 'mt-lg-0',
                    icon: 'bx-receipt',
                    title: 'Est labore ad',
                    description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
                },
                {
                    classDiv: '',
                    icon: 'bx-cube-alt',
                    title: 'Harum esse qui',
                    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
                },
                {
                    classDiv: '',
                    icon: 'bx-images',
                    title: 'Aut occaecati',
                    description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
                },
                {
                    classDiv: '',
                    icon: 'bx-shield',
                    title: 'Beatae veritatis',
                    description: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta'
                },
            ],
            servicesListData: [
                {
                    classAdd: '',
                    data_aos_delay: '100',
                    icon: 'bxl-dribbble',
                    title: 'Lorem Ipsum',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
                },
                {
                    classAdd: 'mt-4 mt-md-0',
                    data_aos_delay: '200',
                    icon: 'bx-file',
                    title: 'Sed ut perspiciatis',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
                },
                {
                    classAdd: 'mt-4 mt-lg-0',
                    data_aos_delay: '300',
                    icon: 'bx-tachometer',
                    title: 'Magni Dolores',
                    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
                },
                {
                    classAdd: 'mt-4',
                    data_aos_delay: '100',
                    icon: 'bx-world',
                    title: 'Nemo Enim',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
                },
                {
                    classAdd: 'mt-4',
                    data_aos_delay: '200',
                    icon: 'bx-slideshow',
                    title: 'Dele cardo',
                    description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
                },
                {
                    classAdd: 'mt-4',
                    data_aos_delay: '300',
                    icon: 'bx-arch',
                    title: 'Divera don',
                    description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
                }
            ],
            CallToActionData: {
                heading: "Call To Action",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                btnText: "Call To Action"
            },
            counts: {
                title: "Voluptatem dignissimos provident quasi",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
                countsListData: [
                    {
                        icon: 'icofont-simple-smile',
                        counter: 65,
                        title: 'Happy Clients',
                        description: 'consequuntur voluptas nostrum aliquid ipsam architecto ut.'
                    },
                    {
                        icon: 'icofont-document-folder',
                        counter: 85,
                        title: 'Projects',
                        description: 'adipisci atque cum quia aspernatur totam laudantium et quia dere tan'
                    },
                    {
                        icon: 'icofont-clock-time',
                        counter: 12,
                        title: 'Years of experience',
                        description: 'aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel'
                    },
                    {
                        icon: 'icofont-award',
                        counter: 15,
                        title: 'Awards',
                        description: 'rerum asperiores dolor alias quo reprehenderit eum et nemo pad der'
                    }
                ],
            },
            team: {
                title: "Team",
                description: "Check our Team",
                teamListData: [
                    {
                        data_aos_delay: "100",
                        img: team1,
                        name: "Walter White",
                        title: "Chief Executive Officer"
                    },
                    {
                        data_aos_delay: "200",
                        img: team2,
                        name: "Sarah Jhonson",
                        title: "Product Manager"
                    },
                    {
                        data_aos_delay: "300",
                        img: team3,
                        name: "William Anderson",
                        title: "CTO"
                    },
                    {
                        data_aos_delay: "400",
                        img: team4,
                        name: "Amanda Jepson",
                        title: "Accountant"
                    }
                ]
            }
        },
        portfolio: {
            header: {
                title: "Portfolio Page",
                description: "We are team of talanted digital marketers"
            },
            title: "Portfolio",
            description: "Check our Portfolio",
            head: {
                item1: "All",
                item2: "App",
                item3: "Card",
                item4: "Web"
            },
            data : [
                {
                    category: 'filter-app',
                    img: portfolio1,
                    name: 'App 1',
                    description: 'App'
                },
                {
                    category: 'filter-web',
                    img: portfolio2,
                    name: 'Web 3',
                    description: 'Web'
                },
                {
                    category: 'filter-app',
                    img: portfolio3,
                    name: 'App 2',
                    description: 'App'
                },
                {
                    category: 'filter-card',
                    img: portfolio4,
                    name: 'Card 1',
                    description: 'Card'
                },
                {
                    category: 'filter-web',
                    img: portfolio5,
                    name: 'Web 2',
                    description: 'Web'
                },
                {
                    category: 'filter-app',
                    img: portfolio6,
                    name: 'App 3',
                    description: 'App'
                },
                {
                    category: 'filter-card',
                    img: portfolio7,
                    name: 'Card 1',
                    description: 'Card'
                },
                {
                    category: 'filter-card',
                    img: portfolio8,
                    name: 'Card 3',
                    description: 'Card'
                },
                {
                    category: 'filter-web',
                    img: portfolio9,
                    name: 'Web 3',
                    description: 'Web'
                }
            ]
        },
        aboutPage:{
            header: {
                title: "About Us",
                description: "We are team of talanted digital marketers"
            },
            leftSidebar: {
                item1: "Contact",
                item2: "History",
                item3: "Values",
                item4: "Portfolio",
                item5: "Clientele",
                item6: "Team",
                item7: "Investor",
            },
            contactAbout: {
                title: "Services",
                description: "Check our Services",
                data: [
                    {
                        classAdd: '',
                        data_aos_delay: '100',
                        icon: 'bxl-dribbble',
                        title: 'Lorem Ipsum',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
                    },
                    {
                        classAdd: 'mt-4 mt-md-0',
                        data_aos_delay: '200',
                        icon: 'bx-file',
                        title: 'Sed ut perspiciatis',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
                    },
                    {
                        classAdd: 'mt-4 mt-lg-0',
                        data_aos_delay: '300',
                        icon: 'bx-tachometer',
                        title: 'Magni Dolores',
                        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
                    },
                    {
                        classAdd: 'mt-4',
                        data_aos_delay: '100',
                        icon: 'bx-world',
                        title: 'Nemo Enim',
                        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
                    },
                    {
                        classAdd: 'mt-4',
                        data_aos_delay: '200',
                        icon: 'bx-slideshow',
                        title: 'Dele cardo',
                        description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
                    },
                    {
                        classAdd: 'mt-4',
                        data_aos_delay: '300',
                        icon: 'bx-arch',
                        title: 'Divera don',
                        description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
                    }
                ]
            },
            companyHistory: {
                heading: "Call To Action",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                btnText: "Call To Action"
            },
            teamAbout: {
                title: "Team",
                description: "Check our Team",
                teamListData: [
                    {
                        data_aos_delay: "100",
                        img: team1,
                        name: "Walter White",
                        title: "Chief Executive Officer"
                    },
                    {
                        data_aos_delay: "200",
                        img: team2,
                        name: "Sarah Jhonson",
                        title: "Product Manager"
                    },
                    {
                        data_aos_delay: "300",
                        img: team3,
                        name: "William Anderson",
                        title: "CTO"
                    },
                    {
                        data_aos_delay: "400",
                        img: team4,
                        name: "Amanda Jepson",
                        title: "Accountant"
                    }
                ]
            },
            map: {
                title: "Map",
                description: "Office Location",
            }
        },
        contactPage: {
            header: {
                title: "Contact",
                description: "We are team of talanted digital marketers"
            },
            head: {
                title: "Map",
                description: "Office Location",
            }
        },
        servicesPage: {
            header: {
                title: "Services",
                description: "We are team of talanted digital marketers"
            }
        },
        BuyerServices: {
            header: {
                title: "Buyer Services",
                description: "We are team of talanted digital marketers"
            }
        },
        SellerServices: {
            header: {
                title: "Seller Services",
                description: "We are team of talanted digital marketers"
            }
        },
        webDevelopment: {
            header: {
                title: "Web Development",
                description: "We are team of talanted digital marketers"
            }
        },
        eMarketing: {
            header: {
                title: "E-Marketing",
                description: "We are team of talanted digital marketers"
            }
        },
        businessPS: {
            header: {
                title: "Business Productivity Services",
                description: "We are team of talanted digital marketers"
            }
        },
        machineLearning: {
            header: {
                title: "Machine Learning",
                description: "We are team of talanted digital marketers"
            }
        },
        professionalsToolbox: {
            header: {
                title: "Professionals Toolbox",
                description: "We are team of talanted digital marketers"
            }
        },
        footer: {
            address: "Abcdef 123 T. Abcdef Teafa Yadfe TT, 12345, India",
            whatsapp: {
                name: "WhatsApp:",
                number: "+91234567891"
            },
            email: {
                name: "Email:",
                email: "info@tts.com"
            },
            part1: {
                title: "Useful Links",
                item1: "Home",
                item2: "About us",
                item3: "Chat",
                item4: "Terms of service",
                item5: "Privacy policy",
                item6: "FAQ"
            },
            part2: {
                title: "Our Services",
                item1: "GeM",
                item2: "Web Development",
                item3: "E-Marketing",
                item4: "Business Productivity Services",
                item5: "Machine Learning",
                item6: "Professionals Toolbox"
            },
            lastPart: {
                copyright: "©",
                company: "TTS",
                terms: "Terms",
                policy: "Privacy Policy"
            }
        }
    }
}

export default WebsiteText;