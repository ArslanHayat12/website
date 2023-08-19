import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { AboutPageStyle, AboutSection, ValuesSection } from './style'
import { AccountabilityIcon, CommitmentIcon, EfficiencyIcon, GrowthMindsetIcon, LearningIcon, TeamWorkIcon } from '../../assets'

export const AboutPage = () => {
    const [slidesPerView, setSlidesPerView] = useState(3)

    const handleResize = () => {
        setSlidesPerView(window.innerWidth > 800 ? 3 : window.innerWidth > 520 ? 2 : 1)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    console.log(window.location.pathname)
    return (
        <AboutPageStyle>
            <AboutSection className="m-80">
                <div className="images-section">
                    <img src="/images/about-so.jpeg" alt="" />
                </div>
                <div className="content-section">
                    <div className="sub-title p-c">About Soft Ocean</div>
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
            <AboutSection className="m-80">
                <div className="content-section">
                    <div className="sub-title p-c">Our Mission</div>
                    <div className="title">We started with a single mission: Help businesses grow</div>
                    <div className="description s-c">
                        We lead with a growth mindset on all fronts and focus on innovating disruptive solutions that have the
                        potential to shape the future of work, technology, and everything in between.
                        <br />
                        <br />
                        To make this possible we cultivate an honest, transparent, blunt, an open culture that is fueled by our
                        team's unrelenting hunger of bringing sustainable and scalable change to the software industry.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/mission.jpeg" alt="" />
                </div>
            </AboutSection>
            <ValuesSection>
                <div className="sub-title p-c">Our Values</div>
                <div className="title">The core values that drive everything we do</div>
                <div className="cards">
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <EfficiencyIcon />
                                    <div className="card-title">Efficiency</div>
                                    <div className="bottom-bar c-1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <AccountabilityIcon />
                                    <div className="card-title">Accountability</div>
                                    <div className="bottom-bar c-2" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <CommitmentIcon />
                                    <div className="card-title">Commitment</div>
                                    <div className="bottom-bar c-3" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <TeamWorkIcon />
                                    <div className="card-title">Team Work</div>
                                    <div className="bottom-bar c-4" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <GrowthMindsetIcon />
                                    <div className="card-title">Growth Mindset</div>
                                    <div className="bottom-bar c-5" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-image">
                                    <LearningIcon />
                                    <div className="card-title">Learning</div>
                                    <div className="bottom-bar c-6" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </ValuesSection>
        </AboutPageStyle>
    )
}
