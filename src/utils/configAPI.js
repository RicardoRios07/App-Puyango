import { configSession } from './configSession';

export const configAPI = ({ endPoint, method, data = null }) => {
    const envUrlApi = `http://${import.meta.env.VITE_URL_API}`;
    const { isAuthenticated, getUserData } = configSession();
    const userData = getUserData();
    const token = userData.token;

    return {
        api: `${envUrlApi}/${endPoint}`,
        method,
        body: data,
        headers: {
            'Content-Type': 'application/json',
            ...isAuthenticated && { 'Authorization': `Bearer ${token}` }
        }
    };
};