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
            <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">Software Development</div>
                    <div className="c-description s-c">
                        Unlock the potential of your business with our expert software development services. From intuitive web
                        and mobile applications to complex software solutions, we transform ideas into powerful, user-centric
                        realities. With meticulous coding, robust architecture, and a focus on innovation, we create software that
                        enhances efficiency, scales seamlessly, and drives your digital success.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/softd.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="images-section t-img">
                    <img src="/images/webd.avif" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Web Development</div>
                    <div className="c-description s-c">
                        Empower your online presence with our expert web development. We create engaging, responsive websites that
                        captivate audiences and drive results. From intuitive designs to seamless functionality, we build the
                        digital face of your brand.
                    </div>
                </div>
                <div className="images-section b-img">
                    <img src="/images/webd.avif" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">App Development</div>
                    <div className="c-description s-c">
                        Transform your vision into dynamic mobile experiences with our app development services. We craft
                        user-friendly, feature-rich apps that resonate with your audience. From concept to launch, we create
                        solutions that engage and drive growth.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/appd.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="images-section t-img">
                    <img src="/images/webDesign.jpg" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Web Designing</div>
                    <div className="c-description s-c">
                        Elevate your brand with captivating web designs that leave a lasting impression. Our expert designers
                        blend aesthetics with functionality to create visually stunning and user-centric websites. From concept to
                        interface, we shape digital experiences that engage and inspire
                    </div>
                </div>
                <div className="images-section b-img">
                    <img src="/images/webDesign.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">App Analytics</div>
                    <div className="c-description s-c">
                        Uncover insights, drive performance. Our app analytics service empowers your business with data-driven
                        decisions. We track user behavior, measure engagement, and optimize experiences to boost app success.
                        Elevate your strategy with actionable insights.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/appa.jpg" alt="" />
                </div>
            </ServiceCard>
        </ServicesPageStyle>
    )
}
