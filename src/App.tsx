import { useRef, useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { CareerPage } from './pages/CareerPage/CareerPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { HomePage } from './pages/HomePage/HomePage'
import { ServicesPage } from './pages/ServicesPage/ServicesPage'
import { AppStyled } from './style'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />
//     },
//     {
//         path: '/about',
//         element: <AboutPage />
//     },
//     {
//         path: '/contact',
//         element: <ContactPage />
//     },
//     {
//         path: '/services',
//         element: <ServicesPage />
//     },
//     {
//         path: '/career',
//         element: <CareerPage />
//     }
// ])

function App() {
    const [disableScroll, setDisableScroll] = useState(false)
    return (
        <BrowserRouter>
            <AppStyled className={disableScroll ? 'disable-scroll' : ''}>
                <Header setDisableScroll={setDisableScroll} />
                <div className="main-app-container">
                    {/* <RouterProvider router={router} /> */}
                    <HomePage />
                </div>
                <Footer />
            </AppStyled>
        </BrowserRouter>
    )
}

export default App
