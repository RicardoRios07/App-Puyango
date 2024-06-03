import { configSession } from './configSession';

export const configAPI = ({ endPoint, method, data = null, params = null }) => {
    const envUrlApi = `http://${import.meta.env.VITE_URL_API}`;
    const { isAuthenticated, getUserData } = configSession();

    const dataUser = getUserData();
    const { token } = dataUser;
    let queryParams = '';

    if (params) {
        const searchParams = new URLSearchParams(params).toString();
        queryParams = `?${searchParams}`;
    }

    const isFormData = data instanceof FormData;

    return {
        api: `${envUrlApi}/${endPoint}${queryParams}`,
        method: method,
        body: data,
        headers: {
            ...(isFormData ? {} : { 'Content-Type': 'application/json', Accept: 'application/json' }),
            ...(isAuthenticated && { Authorization: `Bearer ${token}` }),
        }
    };
};
