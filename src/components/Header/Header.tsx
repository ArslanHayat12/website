import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { ImCross } from 'react-icons/Im'
import { HeaderStyle } from './style'

type HeaderProps = {
    setDisableScroll: React.Dispatch<React.SetStateAction<boolean>>
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string
}
export const Header = (props: HeaderProps) => {
    const { setDisableScroll, activeTab, setActiveTab } = props
    const [showMenu, setshowMenu] = useState(false)

    return (
        <HeaderStyle>
            <div className="logo">
                {/* <img src="/images/logo.png" alt="" /> */}
                NexTech Offshore
            </div>
            <div className={`items ${showMenu ? 'show-menu' : ''}`}>
                <div
                    className="cross-icon"
                    onClick={() => {
                        setDisableScroll(false)
                        setshowMenu(false)
                    }}
                >
                    <ImCross />{' '}
                </div>
                <Link to={'/'} onClick={() => setActiveTab('home')} className={`item ${activeTab == 'home' ? 'active' : ''}`}>
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
                {/* <Link
                    to={'/contact'}
                    onClick={() => setActiveTab('contact')}
                    className={`item ${activeTab == 'contact' ? 'active' : ''}`}
                >
                    Contact Us
                </Link> */}
                {/* <Link to={'/careers'} onClick={()=>setActiveTab('careers')} className={`item ${activeTab == 'careers' ? 'active' : ''}`}>
                    Careers
                </Link> */}
            </div>
            <div
                className="menu-icon"
                onClick={() => {
                    setDisableScroll(true)
                    setshowMenu(true)
                }}
            >
                <FiMenu />
            </div>
        </HeaderStyle>
    )
}
