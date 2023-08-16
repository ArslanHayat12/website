import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { ImCross } from 'react-icons/Im'
import { HeaderStyle } from './style'
import { useState } from 'react'

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
                <Link to={'/career'} className="item">
                    Career
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
