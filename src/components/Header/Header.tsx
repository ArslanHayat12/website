import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { ImCross } from 'react-icons/Im'
import { getActiveTab } from '../../utils'
import { HeaderStyle } from './style'

type HeaderProps = {
    setDisableScroll: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header = (props: HeaderProps) => {
    const { setDisableScroll } = props
    const [showMenu, setshowMenu] = useState(false)
    return (
        <HeaderStyle>
            <div className="logo">
                <img src="/images/logo.png" alt="" />
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
                <Link to={'/'} className={`item ${getActiveTab() == 'home' ? 'active' : ''}`}>
                    Home
                </Link>
                <Link to={'/services'} className={`item ${getActiveTab() == 'services' ? 'active' : ''}`}>
                    Services
                </Link>
                <Link to={'/about'} className={`item ${getActiveTab() == 'about' ? 'active' : ''}`}>
                    About Us
                </Link>
                <Link to={'/contact'} className={`item ${getActiveTab() == 'contact' ? 'active' : ''}`}>
                    Contact Us
                </Link>
                <Link to={'/careers'} className={`item ${getActiveTab() == 'careers' ? 'active' : ''}`}>
                    Careers
                </Link>
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
