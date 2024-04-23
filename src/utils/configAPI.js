import { configSession } from './configSession';

export const configAPI = ({ endPoint, method, data = null, params = null }) => {
    const envUrlApi = `http://${import.meta.env.VITE_URL_API}`;
    const { isAuthenticated } = configSession();

    if (!isAuthenticated()) {
        console.log("Sesión expirada. Usuario no autenticado.");
        window.location.href = '/login'; // Redirect if session is expired
        return null; // Stop further execution if the session is not valid
    }

    const userData = configSession().getUserData();
    const token = userData?.token;

    let queryParams = '';
    if (params) {
        const searchParams = new URLSearchParams(params).toString();
        queryParams = `?${searchParams}`;
    }

    return {
        api: `${envUrlApi}/${endPoint}${queryParams}`,
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
    };
};
