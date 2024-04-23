import Cookies from 'js-cookie';

export const configSession = () => {
    const handleRemoveSession = () => {
        Cookies.remove('USRD');
        localStorage.removeItem('session_expiration');
        // Clear timeout if needed to prevent redirect after logout
        if (window.sessionTimeout) {
            clearTimeout(window.sessionTimeout);
        }
    };

    const setSession = (token, expiration) => {
        const cookieOptions = {
            expires: new Date(expiration),
            secure: process.env.NODE_ENV === 'production',
        };
        Cookies.set('USRD', token, cookieOptions);
        localStorage.setItem('session_expiration', expiration);

        // Setup auto logout on expiration
        window.sessionTimeout = setTimeout(() => {
            handleRemoveSession();
            window.location.href = '/login'; // Redirect to login page
        }, new Date(expiration) - new Date());
    };

    const isAuthenticated = () => {
        const expiration = localStorage.getItem('session_expiration');
        return !!Cookies.get('USRD') && new Date() < new Date(expiration);
    };

    return {
        setSession,
        handleRemoveSession,
        isAuthenticated
    };
};
