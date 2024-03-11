import { ServiceCard, ServicesPageStyle } from './style'

export const ServicesPage = () => {
    return (
        <ServicesPageStyle className="m-80">
            <div className="title th-c">Our Services</div>
            <div className="description s-c">
                Elevate your business with comprehensive software services. Our expertise spans web and app development,
                captivating design, and insightful analytics. From ideation to execution, we craft tailored solutions that empower
                your digital presence, drive engagement, and fuel growth.
            </div>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Web Developers</div>
                    <div className="c-description s-c">
                        These developers specialize in building websites and web applications. They are proficient in frontend
                        technologies like HTML, CSS, and JavaScript, as well as backend languages and frameworks like Node.js,
                        Python (Django), Ruby (Ruby on Rails), and PHP (Laravel).
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/wd.webp" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="images-section">
                    <img src="/images/services/mad.webp" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Mobile App Developers</div>
                    <div className="c-description s-c">
                        These developers focus on creating applications for mobile devices. They may specialize in developing for
                        Android using Java or Kotlin or for iOS using Swift or Objective-C
                    </div>
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Full Stack Developers</div>
                    <div className="c-description s-c">
                        Full stack developers have expertise in both frontend and backend development. They can handle all aspects
                        of a web application, making them versatile and valuable team members.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/fsd.webp" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="images-section">
                    <img src="/images/services/de.webp" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">DevOps Engineers</div>
                    <div className="c-description s-c">
                        DevOps engineers bridge the gap between development and operations. They focus on automating processes,
                        managing deployments, and ensuring smooth collaboration between development and IT teams.
                    </div>
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Data Engineers</div>
                    <div className="c-description s-c">
                        Data engineers work on data-related tasks, such as designing and managing databases, creating data
                        pipelines, and handling data processing and storage.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/dae.webp" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="images-section">
                    <img src="/images/services/mld.webp" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Machine Learning Engineers</div>
                    <div className="c-description s-c">
                        These developers work on artificial intelligence (AI) and machine learning projects, building and
                        implementing algorithms and models.
                    </div>
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Game Developers</div>
                    <div className="c-description s-c">
                        Game developers specialize in creating video games for various platforms, such as PC, consoles, or mobile
                        devices. They may work with game engines like Unity or Unreal Engine.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/gd.webp" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="images-section">
                    <img src="/images/services/ce.webp" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Cloud Engineers</div>
                    <div className="c-description s-c">
                        Cloud engineers focus on deploying, managing, and optimizing applications on cloud platforms like Amazon
                        Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).
                    </div>
                </div>
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Security Engineers</div>
                    <div className="c-description s-c">
                        Security engineers specialize in identifying and mitigating security vulnerabilities in software and
                        implementing measures to protect data and systems.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/se.webp" alt="" />
                </div>
            </ServiceCard>
        </ServicesPageStyle>
    )
}
