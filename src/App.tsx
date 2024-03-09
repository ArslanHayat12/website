import { useEffect, useState } from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { AboutPage } from './pages/AboutPage/AboutPage'
// import { CareerPage } from './pages/CareerPage/CareerPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { HomePage } from './pages/HomePage/HomePage'
import { ServicesPage } from './pages/ServicesPage/ServicesPage'
import { AppStyled } from './style'

function App() {
    const [disableScroll, setDisableScroll] = useState(false)
    const [activeTab, setActiveTab] = useState('home')
    useEffect(() => {
        const path = window.location.pathname
        if (path.includes('/about')) {
            setActiveTab('about')
        } else if (path.includes('/services')) {
            setActiveTab('services')
        } else if (path.includes('/careers')) {
            setActiveTab('careers')
        } else if (path.includes('/contact')) {
            setActiveTab('contact')
        } else {
            setActiveTab('home')
        }
    }, [])
    return (
        <AppStyled className={disableScroll ? 'disable-scroll' : ''}>
            <Header setDisableScroll={setDisableScroll} setActiveTab={setActiveTab} activeTab={activeTab} />

            <div className="main-app-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    {/* <Route path="contact" element={<ContactPage />} /> */}
                </Routes>

                {/* <HomePage />
                    <AboutPage />
                    <ServicesPage />
                    <ContactPage /> */}
            </div>
            <Footer setActiveTab={setActiveTab} activeTab={activeTab} />
        </AppStyled>
    )
}

export default App
