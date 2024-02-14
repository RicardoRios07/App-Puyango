import { configSession } from './configSession';

export const configAPI = ({ endPoint, method, data = null, params = null }) => {
    const envUrlApi = `http://${import.meta.env.VITE_URL_API}`;
    const { isAuthenticated, getUserData } = configSession();
    const userData = getUserData();
    const token = userData?.token; 

    let queryParams = '';
    if (params) {
        const searchParams = new URLSearchParams(params).toString();
        queryParams = `?${searchParams}`;
    }

    return {
        api: `${envUrlApi}/${endPoint}${queryParams}`,
        method,
        body: data,
        headers: {
            'Content-Type': 'application/json',
            ...(isAuthenticated && token) && { 'Authorization': `Bearer ${token}` }
        }
    };
};
