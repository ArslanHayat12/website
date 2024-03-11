import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AboutSection, HomePageStyle, ServicesSection } from './style'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <HomePageStyle>
            <div className="intro-section m-80">
                <div className="content-section">
                    <div className="sub-title p-c">
                        Offshoring <br />
                        Done right!
                    </div>
                    <div className="title">Your Offshore IT Partners</div>
                    <div className="description s-c">
                        We understand the difficulties of offshore resource management, we are here to help.
                    </div>
                </div>
                <div className="images-section">
                    <div className="img-1">
                        <img src="/images/banner-img1.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <CompaniesSection className="m-80">
                <div className="title">Trusted by the best companies in the world</div>
                <div className="companies-logos">
                    <div className="image">
                        <img src="/images/companies/forkfreight.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/companies/fankave.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/companies/sc.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/companies/tely.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/companies/unilever.png" alt="" />
                    </div>
                </div>
            </CompaniesSection> */}
            <AboutSection className="m-80">
                <div className="images-section">
                    <div className="img-1">
                        <img src="/images/intro-1.jpeg" alt="" />
                    </div>
                    <div className="img-2">
                        <img src="/images/intro-2.jpg" alt="" />
                    </div>
                </div>
                <div className="content-section">
                    <div className="sub-title p-c">About Us</div>
                    <div className="title">About NexTech Offshore</div>
                    <div className="description s-c">
                        <span className="p-c">Our Vision:</span> To be the premier one-stop solution for all offshore IT needs,
                        empowering businesses with global talent and opportunities.
                        <br />
                        <span className="p-c">​Our Mission:</span> At NexTech Offshore, our mission is to fulfill the IT staffing
                        needs of our esteemed clients in the United States by connecting them with the finest IT resources
                        worldwide. To achieve this, we embrace innovation, exploring new markets to source sought-after talent,
                        delivering the highest value at the most competitive costs. As we build bridges between businesses and
                        their staffing needs, we also strive to uplift the workforce in emerging markets, offering them better
                        opportunities and pathways for career growth, thus transforming lives for the better.
                        <br />
                        <div className="button-cont">
                            <span>Learn more about how we can help managing an Offshore workforce</span>
                            <Link to={'/about/#help'} className="button">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </AboutSection>
            <ServicesSection className="m-80">
                <div className="sub-title p-c">Our Services</div>
                <div className="title">High-impact services to grow your business</div>
                <div className="service-cards">
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/web-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Web Developers</div>
                        <div className="service-details">
                            These developers specialize in building websites and web applications. They are proficient in frontend
                            technologies like HTML, CSS, and JavaScript, as well as backend languages and frameworks like Node.js,
                            Python (Django), Ruby (Ruby on Rails), and PHP (Laravel).
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/app-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Mobile App Developers</div>
                        <div className="service-details">
                            These developers focus on creating applications for mobile devices. They may specialize in developing
                            for Android using Java or Kotlin or for iOS using Swift or Objective-C
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/software-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Full Stack Developers</div>
                        <div className="service-details">
                            Full stack developers have expertise in both frontend and backend development. They can handle all
                            aspects of a web application, making them versatile and valuable team members
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/dev-ops.png" alt="" />
                        </div>
                        <div className="service-title">DevOps Engineers</div>
                        <div className="service-details">
                            DevOps engineers bridge the gap between development and operations. They focus on automating
                            processes, managing deployments, and ensuring smooth collaboration between development and IT teams.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/data-scrapping-icon.png" alt="" />
                        </div>
                        <div className="service-title">Data Engineers</div>
                        <div className="service-details">
                            Data engineers work on data-related tasks, such as designing and managing databases, creating data
                            pipelines, and handling data processing and storage.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/machine-learning.png" alt="" />
                        </div>
                        <div className="service-title">Machine Learning Engineers</div>
                        <div className="service-details">
                            These developers work on artificial intelligence (AI) and machine learning projects, building and
                            implementing algorithms and models.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/game-development.png" alt="" />
                        </div>
                        <div className="service-title">Game Developers</div>
                        <div className="service-details">
                            Game developers specialize in creating video games for various platforms, such as PC, consoles, or
                            mobile devices. They may work with game engines like Unity or Unreal Engine.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/cloud.png" alt="" />
                        </div>
                        <div className="service-title">Cloud Engineers</div>
                        <div className="service-details">
                            Cloud engineers focus on deploying, managing, and optimizing applications on cloud platforms like
                            Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/security.png" alt="" />
                        </div>
                        <div className="service-title">Security Engineers</div>
                        <div className="service-details">
                            Security engineers specialize in identifying and mitigating security vulnerabilities in software and
                            implementing measures to protect data and systems.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    {/* <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/software-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Software Development</div>
                        <div className="service-details">
                            Crafting innovative software solutions to elevate your business. Expertise in coding, testing, and
                            deployment for seamless user experiences.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div> */}
                    {/* <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/web-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Web Development</div>
                        <div className="service-details">
                            Building engaging websites that captivate audiences. From design to functionality, we create digital
                            experiences that leave a lasting impression.
                        </div>
                        <div className="bottom-bar c-2" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/web-designing-icon.png" alt="" />
                        </div>
                        <div className="service-title">Web Designing</div>
                        <div className="service-details">
                            Designing visually stunning websites that reflect your brand identity. We create captivating user
                            interfaces for seamless online experiences.
                        </div>
                        <div className="bottom-bar c-3" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/app-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">App Development</div>
                        <div className="service-details">
                            Transforming ideas into cutting-edge apps. Expertise in mobile app development for Android and iOS,
                            delivering exceptional user value.
                        </div>
                        <div className="bottom-bar c-4" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/analytics-icon.png" alt="" />
                        </div>
                        <div className="service-title">Apps Analytics</div>
                        <div className="service-details">
                            Uncover insights with our app analytics. Understand user behavior, optimize engagement, and enhance
                            app performance for success.
                        </div>
                        <div className="bottom-bar c-5" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/data-scrapping-icon.png" alt="" />
                        </div>
                        <div className="service-title">Web Scraping</div>
                        <div className="service-details">
                            Unlock valuable data with our web scraping service. Extract, analyze, and leverage information to gain
                            a competitive edge.
                        </div>
                        <div className="bottom-bar c-6" />
                    </div> */}
                </div>
            </ServicesSection>
            <ServicesSection className="m-80 contact-us">
                {/* <div className="sub-title p-c">Our Services</div> */}
                <div className="title">Contact Us</div>
                <div className="description s-c">
                    Get in touch with <span className="p-c">Nextech Offshore</span>
                    <br /> today regarding any enquires about IT services, careers or simply to say Hi!
                </div>
                <a>Click here to email</a>
                <a href="mailto:Information@nextechoffshore.com" className="email-cont">
                    <div className="icon">
                        <MdEmail />
                    </div>
                    <div className="text">Information@nextechoffshore.com</div>
                </a>
                <div className="email-cont">
                    <div className="icon">
                        <BsFillTelephoneFill />
                    </div>
                    <div className="text">+1 847-527-9962</div>
                </div>
            </ServicesSection>
        </HomePageStyle>
    )
}
