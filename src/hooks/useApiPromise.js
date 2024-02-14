import axios from 'axios';
import { configAPI } from 'src/utils/configAPI';

const useApiPromise = () => {
    const handleApiPromise = async ({ endPoint, method, data, params }) => {
        const { api, body, headers } = configAPI({ endPoint, method, data, params });

        try {
            const response = await axios({
                url: api,
                method,
                data: body,
                headers
            });

            return response.data;
        } catch (error) {
            return { error: error.response?.data || 'Error en la API' };
        }
    };

    return { handleApiPromise };
};

export default useApiPromise;