import { FooterStyle } from './style'
import { Link } from 'react-router-dom'

type FooterProps = {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string
}
export const Footer = (props: FooterProps) => {
    const { activeTab, setActiveTab } = props
    return (
        <FooterStyle>
            <div className="f-container">
                <div className="footer-content">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <div className="items">
                        <Link
                            to={'/'}
                            onClick={() => setActiveTab('home')}
                            className={`item ${activeTab == 'home' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to={'/services'}
                            onClick={() => setActiveTab('services')}
                            className={`item ${activeTab == 'services' ? 'active' : ''}`}
                        >
                            Services
                        </Link>
                        <Link
                            to={'/about'}
                            onClick={() => setActiveTab('about')}
                            className={`item ${activeTab == 'about' ? 'active' : ''}`}
                        >
                            About Us
                        </Link>
                        <Link
                            to={'/contact'}
                            onClick={() => setActiveTab('contact')}
                            className={`item ${activeTab == 'contact' ? 'active' : ''}`}
                        >
                            Contact Us
                        </Link>
                        {/* <Link
                            to={'/careers'}
                            onClick={() => setActiveTab('careers')}
                            className={`item ${activeTab == 'careers' ? 'active' : ''}`}
                        >
                            Careers
                        </Link> */}
                    </div>
                </div>
                <div className="social">
                    <div className="copy-rights s-c">
                        Copyrights&copy; <span className="th-c">Soft Ocean</span> 2023.
                    </div>
                    <div className="social-icons">
                        <a href="#" target="_blank" className="icon">
                            <img src="/images/fb.png" alt="" />
                        </a>
                        <a href="#" target="_blank" className="icon">
                            <img src="/images/instagram.jpg" alt="" />
                        </a>
                        <a href="#" target="_blank" className="icon">
                            <img src="/images/linkedIn.png" alt="" />
                        </a>
                        <a href="#" target="_blank" className="icon">
                            <img src="/images/twitter.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}
