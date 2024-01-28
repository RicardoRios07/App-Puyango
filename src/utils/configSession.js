import Cookies from 'js-cookie';

export const configSession = () => {

    const handleRemoveSession = () => Cookies.remove('USRD');

    const setSession = (userData) => {
        const cookieOptions = {
            secure: process.env.NODE_ENV === 'production',
        };
        Cookies.set('USRD', JSON.stringify(userData), cookieOptions);
    };

    const getUserData = () => JSON.parse(Cookies.get('USRD') || '{}');

    const isAuthenticated = () => !!Cookies.get('USRD');

    return {
        setSession,
        handleRemoveSession,
        isAuthenticated,
        getUserData
    };
};
