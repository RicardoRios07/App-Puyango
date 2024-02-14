import Cookies from 'js-cookie';

export const configSession = () => {

    const handleRemoveSession = () => Cookies.remove('USRD');

    const setSession = (token) => {
        const cookieOptions = {
            secure: process.env.NODE_ENV === 'production',
        };
        Cookies.set('USRD', token, cookieOptions);
    };

    const getUserData = () => {
        const token = Cookies.get('USRD');
        return token ? { token } : {};
    };

    const isAuthenticated = () => !!Cookies.get('USRD');

    return {
        setSession,
        handleRemoveSession,
        isAuthenticated,
        getUserData
    };
};
