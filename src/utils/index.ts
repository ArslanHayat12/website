export const getActiveTab = () => {
    const path = window.location.pathname
    if (path.includes('about')) {
        return 'about'
    } else if (path.includes('services')) {
        return 'services'
    } else if (path.includes('careers')) {
        return 'careers'
    } else if (path.includes('contact')) {
        return 'contact'
    } else {
        return 'home'
    }
}
