import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { ContactPageStyle } from './style'

export const ContactPage = () => {
    return (
        <ContactPageStyle className="m-80">
            <div className="content">
                <div className="title">
                    Get In Touch With <br /> <span className="th-c">Soft Ocean</span>
                </div>
                <div className="description">
                    Get in touch with <span className="th-c">Soft Ocean</span> today regarding any enquires about IT services,
                    careers or simply to say Hi!
                </div>
                <div className="cards">
                    <a className="card">
                        <div className="icon email">
                            <div className="opacity" />
                            <MdEmail />
                        </div>
                        <div className="text">info@softocean.com</div>
                    </a>
                    <a className="card">
                        <div className="icon contact">
                            <div className="opacity" />
                            <BsFillTelephoneFill />
                        </div>
                        <div className="text">+923067574550</div>
                    </a>
                </div>
                <div className="follow-us">
                    <div className="title">Follow Us</div>
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
            <div className="form-card">
                <form className="fields">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="">Phone Number</label>
                        <input type="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="field">
                        <label htmlFor="">Service Name</label>
                        <input type="text" placeholder="Software Development etc." required />
                    </div>
                    <button type="submit">Get In Touch</button>
                </form>
            </div>
        </ContactPageStyle>
    )
}
