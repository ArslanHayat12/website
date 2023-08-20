import { FooterStyle } from './style'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <FooterStyle>
            <div className="f-container">
                <div className="footer-content">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <div className="items">
                        <Link to={'/'} className="item">
                            Home
                        </Link>
                        <Link to={'/services'} className="item">
                            Services
                        </Link>
                        <Link to={'/about'} className="item">
                            About Us
                        </Link>
                        <Link to={'/contact'} className="item">
                            Contact Us
                        </Link>
                        <Link to={'/careers'} className="item">
                            Careers
                        </Link>
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
                        <a href="https://www.linkedin.com/company/soft-ocean/" target="_blank" className="icon">
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
