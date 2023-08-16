import { AboutSection, CompaniesSection, HomePageStyle, ServicesSection } from './style'

export const HomePage = () => {
    return (
        <HomePageStyle>
            <div className="intro-section">
                <div className="content-section">
                    <div className="sub-title p-c">Ocean of Technologies</div>
                    <div className="title">Let's dive deep in Ocean of Technologies</div>
                    <div className="description s-c">
                        Solving everyday business problems with robust solutions in the SaaS, analytics, cybersecurity,
                        blockchain, and automations markets.
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
                        <img src="/images/nuhtek.svg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/fankave.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/sc.svg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/tely.svg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/unilever.svg" alt="" />
                    </div>
                </div>
            </CompaniesSection>
            <AboutSection className="m-80">
                <div className="images-section">
                    <div className="img-1">
                        <img src="/images/bg2.jpeg" alt="" />
                    </div>
                    <div className="img-2">
                        <img src="/images/bg3.jpeg" alt="" />
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
                <div className="sub-title">Our Services</div>
                <div className="title">High-impact services to grow your business</div>
                <div className="service-cards">
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/sd.svg" alt="" />
                        </div>
                        <div className="service-title">Software Development</div>
                        <div className="service-details">
                            We offer software development services aimed at designing, supporting and evolving. We are known for
                            serving mid and large-level enterprises.
                        </div>
                        <div className="bottom-bar c-1" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/wbd.svg" alt="" />
                        </div>
                        <div className="service-title">Web Development</div>
                        <div className="service-details">
                            Our team handles custom solutions of all sizes from large-scale technology projects to simple website
                            design projects.
                        </div>
                        <div className="bottom-bar c-2" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/wd.svg" alt="" />
                        </div>
                        <div className="service-title">Web Designing</div>
                        <div className="service-details">
                            Our digital design process is developed from a passion for great User Interfaces (UI) that help drive
                            a powerful User Experience (UX).
                        </div>
                        <div className="bottom-bar c-3" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/ad.svg" alt="" />
                        </div>
                        <div className="service-title">App Development</div>
                        <div className="service-details">
                            Deliver speed, flexibility and mobility with our bespoke app development services. We ensure your apps
                            meet users wherever they are, and work across any range of device types.
                        </div>
                        <div className="bottom-bar c-4" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/aa.svg" alt="" />
                        </div>
                        <div className="service-title">Apps Analytics</div>
                        <div className="service-details">
                            We will provide all the analytics regarding the events that performed at user's end
                        </div>
                        <div className="bottom-bar c-5" />
                    </div>
                    <div className="card">
                        <div className="serice-logo">
                            <img src="/images/aa.svg" alt="" />
                        </div>
                        <div className="service-title">Web Apps Analytics</div>
                        <div className="service-details">
                            We will provide all the analytics regarding the events that performed at user's end
                        </div>
                        <div className="bottom-bar c-6" />
                    </div>
                </div>
            </ServicesSection>
        </HomePageStyle>
    )
}
