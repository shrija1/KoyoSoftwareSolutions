// team
import team1 from './components/Home/Images/ft1.jpg'
import team2 from './components/Home/Images/ft2.jpg'
import team3 from './components/Home/Images/ft3.jpg'
// portfolio
import portfolio1 from './img/portfolio/portfolio1.jpg'
import portfolio2 from './img/portfolio/portfolio2.jpg'
import portfolio3 from './img/portfolio/portfolio3.jpg'
import portfolio4 from './img/portfolio/portfolio4.jpg'
import portfolio5 from './img/portfolio/portfolio5.jpg'
import portfolio6 from './img/portfolio/portfolio6.jpg'
import portfolio7 from './img/portfolio/portfolio7.jpg'

//graphics portfolio
import gportfolio1 from './img/graphicsportfolio/Banner/1.jpg'
import gportfolio2 from './img/graphicsportfolio/Banner/2.jpg'
import gportfolio3 from './img/graphicsportfolio/Banner/3.jpg'
import gportfolio4 from './img/graphicsportfolio/Banner/4.jpg'
import gportfolio5 from './img/graphicsportfolio/Banner/5.jpg'
import gportfolio6 from './img/graphicsportfolio/Banner/6.jpg'
import gportfolio7 from './img/graphicsportfolio/Banner/7.jpg'

import gportfolio8 from './img/graphicsportfolio/MenuCard/1.jpg'
import gportfolio9 from './img/graphicsportfolio/MenuCard/2.jpg'
import gportfolio10 from './img/graphicsportfolio/MenuCard/3.jpg'
import gportfolio11 from './img/graphicsportfolio/MenuCard/4.jpg'
import gportfolio12 from './img/graphicsportfolio/MenuCard/5.jpg'
import gportfolio13 from './img/graphicsportfolio/MenuCard/6.jpg'
import gportfolio14 from './img/graphicsportfolio/MenuCard/7.jpg'
import gportfolio15 from './img/graphicsportfolio/MenuCard/8.jpg'
import gportfolio16 from './img/graphicsportfolio/MenuCard/9.jpg'
import gportfolio17 from './img/graphicsportfolio/MenuCard/10.jpg'

import gportfolio18 from './img/graphicsportfolio/Packaging/1.jpg'
import gportfolio19 from './img/graphicsportfolio/Packaging/2.jpg'
import gportfolio20 from './img/graphicsportfolio/Packaging/3.jpg'
import gportfolio21 from './img/graphicsportfolio/Packaging/4.jpg'
import gportfolio22 from './img/graphicsportfolio/Packaging/5.jpg'
import gportfolio23 from './img/graphicsportfolio/Packaging/6.jpg'


import gportfolio24 from './img/graphicsportfolio/Vinyl-Wrapper/1.jpg'
import gportfolio25 from './img/graphicsportfolio/Vinyl-Wrapper/2.jpg'
import gportfolio26 from './img/graphicsportfolio/Vinyl-Wrapper/3.jpg'
import gportfolio27 from './img/graphicsportfolio/Vinyl-Wrapper/4.jpg'
import gportfolio28 from './img/graphicsportfolio/Vinyl-Wrapper/5.jpg'
import gportfolio29 from './img/graphicsportfolio/Vinyl-Wrapper/6.jpg'
import gportfolio30 from './img/graphicsportfolio/Vinyl-Wrapper/7.jpg'
import gportfolio31 from './img/graphicsportfolio/Vinyl-Wrapper/8.jpg'
import gportfolio32 from './img/graphicsportfolio/Vinyl-Wrapper/9.jpg'
import gportfolio33 from './img/graphicsportfolio/Vinyl-Wrapper/10.jpg'







// buyer services
import pychons from './img/BuyerServices/Morder pychons.png'




let WebsiteText=null;
if(WebsiteText===null){
    WebsiteText={
        home:{
            navbar: {
                navItems: {
                    item1: "Home",
                    item2: {
                        main: "Services",
                        // item1: {
                        //     main: "GeM",
                        //     item1: "Buyer Services",
                        //     item2: "Seller Services"
                        // },
                        item2: "Web Design",
                        item3: "AI and ML",
                        item4: "Learn and Code",
                        item5: "Branding Solutions",
                    },
                    item3: "About",
                    item4: "Contact",
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
                heading:"Koyo Software Solutions",
                headerText:"Problem Solvers. Bespoke Software Solutions Engineers",
                headerCardsData: [
                    {
                        classBox: '',
                        icon: '../Images/Web Icon/Web Design icon.svg',
                        name: 'Web Design'
                    },
                    {
                        classBox: '',
                        icon: '../Images/Web Icon/AI&ML.svg',
                        name: 'AI and ML'
                    },
                    {
                        classBox: 'mt-4 mt-xl-0',
                        icon: '../Images/Web Icon/Code Camp icon.svg',
                        name: 'Learn and Code'
                    },
                    {
                        classBox: 'mt-4 mt-xl-0',
                        icon: '../Images/Web Icon/Branding Solutions icon.svg',
                        name: 'Branding Solutions'
                    } 
                ]
            },
            about: {
                introductionHeading:"About Us",
                introductionText:"We make secure, efficient, SEO-friendly websites for information ans e-Commerce.",
                introductionCheckList1:"Our solutions include Website design, OCR for Arabic/English invoices and ID cards, Vehicle number plate recognition, Chatbots for customer service, Project-based coding classes, Graphics design, and one-stop solution for tendering on GeM.",
                introductionCheckList2:"We cater to a broad range of industries - Government, Hospitality, NGO, Pharmacy, Professionals, Restaurants, Speciality Food Retailers",
                introductionCheckList3:"Free consultation and etimate preparation.",
                introductionEndingText:"Call or write to check how we can help you.",
            },
          
            featuresListData: [
                {
                    classDiv: 'mt-lg-0',
                    icon: 'bx-receipt',
                    title: 'Web Design Services',
                    description: 'We make secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into a cost-effective Anroid app.\
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel\
                                 erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.\
                                 In at libero sed nunc venenatis imperdiet sed ornare turpis',
                    link: '/webDesign'

                },
                {
                    classDiv: '',
                    icon: 'bx-cube-alt',
                    title: 'AI and Machine Learning',
                    description: 'We deliver bespoke solutions for chatbots, OCR for English and Arabic ID cards, OCR for accountants, Automated vehicle number plate reading, AI-driven user-adapted landing pages, pop-ups and loading time optimization.\
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel\
                                  erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.\
                                   In at libero sed nunc venenatis imperdiet sed ornare turpis',
                    link: '/aiAndml'
                },
                {
                    classDiv: '',
                    icon: 'bx-images',
                    title: 'Learn and Code',
                    description: 'We deliver short-duration courses of 1-6 week duration. we focus on two segments: 11-14 year olds with no prior experience and, professionals or university students who are keen on acquiring hands-on experience using real-life data in AI, machine learning and image processing. We focus on learning-by-doing with 80% project work and 20% theory.\
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel\
                                erisque enim ligula venenatis dolor. Maecenas nisl est, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet',
                    link:'/learnAndCode'
                },
                {
                    classDiv: '',
                    icon: 'bx-shield',
                    title: 'Branding Solutions',
                    description: 'We help you build your corporate identity by designing cover pages and display pictures for your social media platforms, visiting cards, logos, stickers or mock-ups for product packaging that resonate with your corporate strategy, have a high recall value and are unique.\
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel\
                                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum\
                                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nun sed ullamcorper ipsum',
                    link:'/brandingSolutions'
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
                heading: "Get a free Quote",
                description: "You have an IT solution need. Send us a message, call us or simply drop by for a time and price estimate to support your decision",
                btnText: "Contact Us"
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
                        name: "Amit Agarwal, PhD",
                        title: "Chief Executive Officer",
                        description:'He holds a PhD in Electrical Engineering from Nanyang Tech University and an MS in Financial Math from the London School of Economics. He is responsible for delivering the human, technology and execution infrastructure clients expect of TTS. He is an amateur food chemist.'
                    },
                    {
                        data_aos_delay: "200",
                        img: team2,
                        name: "Bhavyam Goyal",
                        title: "Solution Architect",
                        description:'He holds a Masters in Computer Science. He is a full stack developer. He mentors teams for delivery on client projects in machile learning, web and mobile technologies.'
                    },
                    {
                        data_aos_delay: "300",
                        img: team3,
                        name: "Maryam Esmaiel",
                        title: "Technology Manager",
                        description:'She holds a Bachelors in Artificial Intelligence from the University of Damascus. At TTS she leads product development for Learn and Code, manages projects in Optical Character Recognition for Latin and Arabic scripts and leads idea generation for Graphics Design projects. She likes cats, mattah and Artificial Intelligence.'
                    },
                ]
            },
            portfolio:{
              title:"Check Our Portfolio",
              description:"Websites",
              portfolioListData:[{
                img : portfolio1,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://desifirangifoods.web.app/",
                category:"filter-restaurant app-item"
              },
              {
                img : portfolio2,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://eka.network/",
                category:"filter-ecommerce app-item"
              },
              {
                img : portfolio3,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://ngo-website-tts.web.app/",
                category:"filter-ngo app-item"
              },
              {
                img : portfolio4,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://grocery-website-tts.web.app",
                category:"filter-ecommerce app-item"
              },
              {
                img : portfolio5,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://realestate-jk.web.app",
                category:"filter-realestate app-item"
              },
              {
                img : portfolio6,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:" https://samskrithi-goshala.web.app",
                category:"filter-ngo app-item"

              },
              {
                img : portfolio7,
                description:"desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.",
                technologies: "reactJS, BootStrap, JS, CSS",
                hosting:" Antibes, France",
                link:"https://www.sevencolors7.com",
                category:"filter-portfolio app-item"
              }
             
              ]
            },
            graphicsportfolio:{
                title:"Check Our Portfolio",
                description:"Branding Solutions",
                graphicsportfolioListData:[{
                    category:"Branding",
                    galleryData:[
                        {
                            id:"1",  /*ratio 2:1*/
                            img:gportfolio1,
                            class:"myImg88 myImg" 

                        },
                        {
                            id:"2", /* ratio 3:2*/
                            img:gportfolio2,
                            class:"myImg88 myImg1"

                        },
                        {
                            id:"3",  /*ratio 3:4*/
                            img:gportfolio3,
                            class:"myImg88 myImg2"

                        },
                        {
                            id:"4", /* ratio 5:3*/
                            img:gportfolio4,
                            class:"myImg88 myImg3"

                        },
                        {
                            id:"5", /*ratio 1:1 */
                            img:gportfolio5,
                            class:"myImg88 myImg4"

                        },
                        {
                            id:"6", /* ratio : 4:3*/
                            img:gportfolio6,
                            class:"myImg88 myImg5"

                        },
                        {
                            id:"7", /*ration 16:9*/
                            img:gportfolio7,
                            class:"myImg88 myImg6"

                        },
                        {
                            id:"8",  /*ratio : 2:3*/
                            img:gportfolio7,
                            class:"myImg88 myImg7"

                        },
                        {
                            id:"9", /*ratio : 3:5*/
                            img:gportfolio7,
                            class:"myImg88 myImg8"

                        },
                        {
                            id:"10",  /*ratio : 1:2*/
                            img:gportfolio7,
                            class:"myImg88 myImg9"

                        },
                        
                    ]


                },
                {
                    category:"Menu Card",
                    galleryData:[
                        {
                            id:"11",
                            img:gportfolio8,
                            class:"myImg88 myImg"

                        },
                        {
                            id:"12",
                            img:gportfolio9,
                            class:"myImg88 myImg1"

                        },
                        {
                            id:"13",
                            img:gportfolio10,
                            class:"myImg88 myImg2"

                        },
                        {
                            id:"14",
                            img:gportfolio11,
                            class:"myImg88 myImg3"

                        },
                        {
                            id:"15",
                            img:gportfolio12,
                            class:"myImg88 myImg4"

                        },
                        {
                            id:"16",
                            img:gportfolio13,
                            class:"myImg88 myImg5"

                        },
                        {
                            id:"17",
                            img:gportfolio14,
                            class:"myImg88 myImg6"

                        },
                        {
                            id:"18",
                            img:gportfolio15,
                            class:"myImg88 myImg7"

                        },
                        {
                            id:"19",
                            img:gportfolio16,
                            class:"myImg88 myImg8"

                        },
                        {
                            id:"20",
                            img:gportfolio17,
                            class:"myImg88 myImg9"

                        },
                        
                    ]


                
                },
                {
                    category:"Vinyl-Wrapper",
                    galleryData:[
                        {
                            id:"28",
                            img:gportfolio24,
                            class:"myImg88 myImg"

                        },
                        {
                            id:"29",
                            img:gportfolio25,
                            class:"myImg88 myImg1"

                        },
                        {
                            id:"30",
                            img:gportfolio26,
                            class:"myImg88 myImg2"

                        },
                        {
                            id:"31",
                            img:gportfolio27,
                            class:"myImg88 myImg3"

                        },
                        {
                            id:"32",
                            img:gportfolio28,
                            class:"myImg88 myImg4"

                        },
                        {
                            id:"33",
                            img:gportfolio29,
                            class:"myImg88 myImg5"

                        },
                        {
                            id:"34",
                            img:gportfolio30,
                            class:"myImg88 myImg6"

                        },
                        {
                            id:"35",
                            img:gportfolio31,
                            class:"myImg88 myImg7"

                        },
                        {
                            id:"36",
                            img:gportfolio32,
                            class:"myImg88 myImg8"

                        },
                        {
                            id:"37",
                            img:gportfolio33,
                            class:"myImg88 myImg9"

                        },
                        
                    ]


                
                },
                {
                    category:"Packaging",
                    galleryData:[
                        {
                            id:"18",
                            img:gportfolio18,
                            class:"myImg88 myImg"

                        },
                        {
                            id:"19",
                            img:gportfolio19,
                            class:"myImg88 myImg1"

                        },
                        {
                            id:"20",
                            img:gportfolio20,
                            class:"myImg88 myImg2"

                        },
                        {
                            id:"21",
                            img:gportfolio21,
                            class:"myImg88 myImg3"

                        },
                        {
                            id:"22",
                            img:gportfolio22,
                            class:"myImg88 myImg4"

                        },
                        {
                            id:"23",
                            img:gportfolio23,
                            class:"myImg88 myImg5"

                        },
                        {
                            id:"24",
                            img:gportfolio18,
                            class:"myImg88 myImg6"

                        },
                        {
                            id:"25",
                            img:gportfolio19,
                            class:"myImg88 myImg7"

                        },
                        {
                            id:"26",
                            img:gportfolio20,
                            class:"myImg88 myImg8"

                        },
                        {
                            id:"27",
                            img:gportfolio21,
                            class:"myImg88 myImg9"

                        },
                        
                    ]


                
                },
                
                
            ]
            },
            projects:{
                title:"Jobs/Internships",
                description:"Join Our Team",
                projectListData:[
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    },
                    {
                        topic:"Grip Controller optimisation for a coconut tree climbing robotic harvester",
                        keywords:"Robotics , CAD, Simulation, Controls",
                        projectdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.",
                        duration:"4 Month",
                        skills:"CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently",
                        deadline:"MMMM,DD,YYYY"

                    }
            ]

            } 
        
        },
        sellerServicesPage: {
            title: "Services",
            description: "Seller Services Page",
        },
        webDevelopmentPage: {
            title: "Services",
            description: "Web Development Page",
        },
        eMarketingPage: {
            title: "Services",
            description: "E-Marketing Page",
        },
        businessProductivityServicesPage: {
            title: "Services",
            description: "Business Productivity Services Page",
        },
        machineLearningPage: {
            title: "Services",
            description: "Machine Learning Page",
        },
        professionalsToolboxPage: {
            title: "Services",
            description: "Professionals Toolbox Page",
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
                        name: "Amit Agarwal, PhD",
                        title: "Chief Executive Officer"
                    },
                    {
                        data_aos_delay: "200",
                        img: team2,
                        name: "Bhavyam Goyal",
                        title: "Solution Architect"
                    },
                    {
                        data_aos_delay: "300",
                        img: team3,
                        name: "Maryam Esmaiel",
                        title: "Technology Manager"
                    },
                ]
            },
            joinBtn: {
                btnText: "Apply"
            }
        },
        joinPage: {
            header: {
                title: "Apply",
                description: "We are team of talanted digital marketers"
            },
            home: {
                title: "Team",
                description: "JOIN OUR TEAM"
            },
            form: {
                text1: "Please Fill Up This Form Now",
                text2: "Please choose one"
            }
        },
        contactPage: {
            header: {
                title: "Contact",
                description: "We are team of talanted digital marketers"
            },
            contact: {
                title: "Contact",
                description: "Contact Us",
                address: {
                    icon1: "icofont-google-map",
                    title1: "Location:",
                    info1: "Abcdef 123 T. Abcdef Teafa Yadfe, TT, 12345, India",
                    icon2: "icofont-envelope",
                    title2: "Email:",
                    info2: "info@example.com",
                    icon3: "icofont-phone",
                    title3: "Call:",
                    info3: "+91 1234 45678 91",
                },
                form: {
                    title: "Send Us Your Queries",
                    btn: "Send Message"
                }
            },
            map: {
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
            },
            title: "Select Services",
            data : [
                {
                    "img": pychons,
                    "title": "Product Name",
                    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                    "price": "$120",
                    "stock": "60 Available"
                },
                {
                    "img": pychons,
                    "title": "Product Name",
                    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                    "price": "$120",
                    "stock": "60 Available"
                },
                {
                    "img": pychons,
                    "title": "Product Name2",
                    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                    "price": "$120",
                    "stock": "60 Available"
                }
            ]
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
            address: "Ward # 17, Radio Station Road, Kathua, J&K U.T., India 184101",
            whatsapp: {
                name: "WhatsApp:",
                number: "+91 98679 10690"
            },
            email: {
                name: "Email:",
                email: "ttsjk.kjstt@gmail.com"
            },
            part1: {
                title: "Useful Links",
                item1: "Blog",
                item2: "Jobs",
                item3: "FAQ",
            },
            part2: {
                title: "Our Services",
                item1: "Web Design",
                item2: "AI & Machine Learning",
                item3: "Learn and Code",
                item4: "Branding Solutions",
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