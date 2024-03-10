import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { AboutPageStyle, AboutSection, HelpSection, ValuesSection } from './style'
import { AccountabilityIcon, CommitmentIcon, EfficiencyIcon, GrowthMindsetIcon, LearningIcon, TeamWorkIcon } from '../../assets'

export const AboutPage = () => {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth > 800 ? 3 : window.innerWidth > 520 ? 2 : 1)

    const handleResize = () => {
        setSlidesPerView(window.innerWidth > 800 ? 3 : window.innerWidth > 520 ? 2 : 1)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <AboutPageStyle>
            <AboutSection className="m-80">
                <div className="images-section">
                    <img src="/images/about-so.jpeg" alt="" />
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
                    </div>
                </div>
            </AboutSection>

            <HelpSection className="m-80" id="help">
                <div className="sub-title p-c">How we can Help</div>
                <div className="title">Challenges in Managing Offshore workforce</div>
                <div className="item">
                    <div className="item-title">Time Zone differences</div>
                    <div className="description">
                        Different time zones can lead to challenges in real-time communication and collaboration.
                        <div className="sol">
                            We ensure that our workforce has at least a 4 hours overlap with Eastern Standard Time to ensure daily
                            sync and prioritization changes
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-title">Language Barriers</div>
                    <div className="description">
                        Language differences can sometimes cause misunderstandings or miscommunication, especially when complex
                        technical details need to be conveyed accurately.
                        <div className="sol">
                            Our workforce is proficient in both spoken and written English as it has been the medium of education
                            throughout their lives
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-title">Quality and Expertise</div>
                    <div className="description">
                        Assessing the quality and expertise of offshore developers can be more challenging when there is limited
                        face-to-face interaction and access to the local work environment.
                        <div className="sol">
                            We prioritize hiring exceptional candidates who not only meet but exceed the job requirements from the
                            outset. Subsequently, we maintain a vigilant oversight to ensure their performance consistently meets
                            the high standards expected by our clients.
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-title">Cost</div>
                    <div className="description">
                        The cost of hiring offshore resources has experienced a notable rise over the years, particularly in
                        mature markets where competition for these resources is fierce.
                        <div className="sol">
                            NexTech Offshore delivers exceptional value to its customers through our highly competitive and
                            aggressive pricing strategy. Our ability to achieve this is a result of our approach to sourcing
                            resources from untapped markets, where the competition is not as intense as in mature markets.
                        </div>
                    </div>
                </div>
            </HelpSection>
            {/* <AboutSection className="m-80">
                <div className="content-section">
                    <div className="sub-title p-c">Our Purpose</div>
                    <div className="title">Empowering Innovation Through Technology</div>
                    <div className="description s-c">
                        At <span className="p-c">Soft Ocean</span>, our mission is to drive innovation through technology
                        solutions that transform businesses. We are committed to delivering exceptional software development, web
                        development, web designing, app development, app analytics, and web scraping services that propel your
                        brand forward. <br />
                        <br /> With a passionate team dedicated to crafting cutting-edge solutions, we empower your digital
                        journey, ensuring your success in an ever-evolving landscape. Experience excellence, unleash
                        possibilities, and elevate your business with us.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/mission.jpeg" alt="" />
                </div>
            </AboutSection> */}

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
