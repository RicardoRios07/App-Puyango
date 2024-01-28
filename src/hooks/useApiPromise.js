import axios from 'axios';
import { configAPI } from 'src/utils/configAPI';

const useApiPromise = () => {

    const handleApiPromise = async ({ endPoint, method, data }) => {
        const { api, body, headers } = configAPI({ endPoint, method, data });

        try {
            const response = await axios({
                url: api,
                method: method,
                data: body,
                headers: headers
            });

            return response.data; 
        } catch (error) {
            return { error: error.message || 'Error en la API' };
        }
    };

    return { handleApiPromise };
};

export default useApiPromise;