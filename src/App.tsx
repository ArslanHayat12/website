import { useState } from 'react'
import {  Route,  Routes, createBrowserRouter } from 'react-router-dom'
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
    return (
        <AppStyled className={disableScroll ? 'disable-scroll' : ''}>
            <Header setDisableScroll={setDisableScroll} />

            <div className="main-app-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Routes>

                {/* <HomePage />
                    <AboutPage />
                    <ServicesPage />
                    <ContactPage /> */}
            </div>
            <Footer />
        </AppStyled>
    )
}

export default App
