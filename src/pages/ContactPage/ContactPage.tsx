import { useState } from 'react'
// import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'
import { ContactPageStyle } from './style'
import { Loader } from '../../components/Loader/Loader'

export const ContactPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSubmiting, setFormSubmiting] = useState(false)
    const [name, setName] = useState('')
    const sendEmail = (e) => {
        e.preventDefault()
        setFormSubmiting(true)
        emailjs
            .sendForm('service_h05t7ds', 'template_09gnofs', e.target, 'YeyHxMO0-7lVMHXG1')
            .then(() => {
                setFormSubmiting(false)
                setFormSubmitted(true)
            })
            .catch((error) => {
                setFormSubmiting(false)
                console.error('Error sending email:', error)
            })
    }

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
                    <a href="mailto:mahrukhwaheed@gmail.com" className="card" target="_blank" rel="noreferrer">
                        <div>
                            <div className="icon email">
                                <div className="opacity" />
                                <MdEmail />
                            </div>
                        </div>
                        <div className="text">mahrukhwaheed@gmail.com</div>
                    </a>
                    {/* <a href="" className="card" target="_blank">
                        <div>
                            <div className="icon contact">
                            <div className="opacity" />
                            <BsFillTelephoneFill />
                        </div>
                        </div>
                        <div className="text">+923067574550</div>
                    </a> */}
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
                        <a href="https://www.linkedin.com/company/soft-ocean/" target="_blank" className="icon" rel="noreferrer">
                            <img src="/images/linkedIn.png" alt="" />
                        </a>
                        <a href="#" target="_blank" className="icon">
                            <img src="/images/twitter.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="form-card">
                <form className="fields" onSubmit={sendEmail}>
                    <div className="field">
                        <label htmlFor="client_name">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="client_name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="client_email">Email</label>
                        <input type="email" name="client_email" placeholder="Email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="client_number">Phone Number</label>
                        <input type="phone" name="client_number" placeholder="Phone Number" required />
                    </div>
                    <div className="field">
                        <label htmlFor="requested_service">Service Name</label>
                        <input type="text" name="requested_service" placeholder="Software Development etc." required />
                    </div>
                    <button type="submit">
                        {formSubmiting ? (
                            <>
                                <Loader /> <span>Submitting</span>
                            </>
                        ) : (
                            'Get In Touch'
                        )}
                    </button>
                    {formSubmitted && (
                        <div className="success-msg p-c">
                            Thanks {name} for connecting with us. Our team will contact with you soon.
                        </div>
                    )}
                </form>
            </div>
        </ContactPageStyle>
    )
}
