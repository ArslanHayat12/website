import { AboutSection, CompaniesSection, HomePageStyle, ServicesSection } from './style'

export const HomePage = () => {
    return (
        <HomePageStyle>
            <div className="intro-section">
                <div className="content-section">
                    <div className="sub-title p-c">Ocean of Technologies</div>
                    <div className="title">Oceanic Tech Discoveries</div>
                    <div className="description s-c">
                        Discover limitless possibilities with our comprehensive suite of web development, app creation, and data
                        insights services. Elevate your brand's online presence and decision-making prowess. Join us in crafting a
                        smarter, more connected future.
                    </div>
                </div>
                <div className="images-section">
                    <div className="img-1">
                        <img src="/images/banner-img1.svg" alt="" />
                    </div>
                    <div className="img-2">
                        <img src="/images/banner-img2.png" alt="" />
                    </div>
                </div>
            </div>
            <CompaniesSection className="m-80">
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
            </CompaniesSection>
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
                    <div className="title">Innovating Software Solutions for Tomorrow's Challenges</div>
                    <div className="description s-c">
                        At Soft Ocean, we're a dynamic software company dedicated to crafting solutions that drive efficiency,
                        streamline operations, and elevate user experiences. With a focus on innovation and cutting-edge
                        technology, we deliver bespoke software tailored to your needs. Our team of skilled developers thrives on
                        turning ideas into reality, empowering businesses to stay ahead in the digital landscape. Let's shape the
                        future together. <br />
                        <br />
                        With a deep understanding of industry trends and an unwavering dedication to quality, we transform complex
                        challenges into streamlined solutions. Whether it's custom software development, web designing, web
                        applications or mobile apps, we blend creativity with technical expertise to create softwares that drive
                        success.
                    </div>
                </div>
            </AboutSection>
            <ServicesSection className="m-80">
                <div className="sub-title p-c">Our Services</div>
                <div className="title">High-impact services to grow your business</div>
                <div className="service-cards">
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/services/software-development-icon.png" alt="" />
                        </div>
                        <div className="service-title">Software Development</div>
                        <div className="service-details">
                            Crafting innovative software solutions to elevate your business. Expertise in coding, testing, and
                            deployment for seamless user experiences.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
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
                    </div>
                </div>
            </ServicesSection>
        </HomePageStyle>
    )
}
